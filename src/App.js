import "./App.css";
import Nav from "./components/nav";
import { useState, useEffect } from "react";

const breedUrl = `https://api.thecatapi.com/v1/breeds?limit=3`;
const api_key = process.env.CAT_API_KEY;

function App() {
  const [breeds, setBreeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchBreeds() {
      try {
        const response = await fetch(breedUrl, {
          headers: { "x-api-key": api_key },
        });
        const data = await response.json();

        // Fetch images for each breed
        const breedsWithImages = await Promise.all(
          data.map(async (breed) => {
            if (!breed.reference_image_id) return { ...breed, imageUrl: "" };

            const imageResponse = await fetch(
              `https://api.thecatapi.com/v1/images/${breed.reference_image_id}`,
              {
                headers: { "x-api-key": api_key },
              }
            );
            const imageData = await imageResponse.json();
            return { ...breed, imageUrl: imageData.url };
          })
        );

        setBreeds(breedsWithImages);
      } catch (error) {
        console.error("Error fetching breeds:", error);
      }
    }

    fetchBreeds();
  }, []);

  // Trigger filter after 3 letters
  const filteredBreeds =
    searchTerm.length >= 3
      ? breeds.filter((breed) =>
          breed.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : breeds;

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main className="px-5 lg:px-16 lg:min-h-96">
        <div className="flex flex-col items-center pb-20">
          <h1 className="font-marker">Lovely Cats</h1>
          {/* Search */}
          <input
            type="text"
            placeholder="Search for a cat breed..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 mb-5 w-full lg:w-1/3"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBreeds.length > 0 ? (
            filteredBreeds.map((breed) => (
              <div key={breed.id} className="card">
                <div className="card-spacing">
                  {breed.imageUrl ? (
                    <img
                      src={breed.imageUrl}
                      alt={breed.name}
                      className="w-full h-[250px] object-cover"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                  <div>
                    <h2>{breed.name}</h2>
                    <p className="text-zinc-500 pb-4">Origin: {breed.origin}</p>
                    <p>{breed.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No breeds match your search.</p>
          )}
        </div>
      </main>

      <footer>
        <div className="h-10 w-10">
          <a href="/">
            <img src="logo.png" alt="Logo" className="invert" />
          </a>
        </div>
        <div>
          <ul className="lg:text-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Max Mustermann</span>
          <span>Mariahilfer Straße 10</span>
          <span>1070 Wien, Österreich</span>
          <span>+43 660 1234567</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
