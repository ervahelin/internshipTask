import "./App.css";
import Nav from "./components/nav";
import { useState, useEffect } from "react";

const breedUrl = `https://api.thecatapi.com/v1/breeds?limit=6`;
const api_key =
  "live_h6ibyvAtRfJq3k0gKDNy4dBxcg3OC4yUOBK7EIxyqPHejbj8vUXHxPzxffW5T1uX";

function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    async function fetchBreeds() {
      try {
        // fetch breeds
        const response = await fetch(breedUrl, {
          headers: { "x-api-key": api_key },
        });
        const data = await response.json();

        // fetch images for each breed
        const breedsWithImages = await Promise.all(
          data.map(async (breed) => {
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
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main className="p-5 lg:p-10">
        <h1>Lovely Cats</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {breeds.map((breed) => (
            <div key={breed.id} className="card">
              <div className="card-spacing">
                <img src={breed.imageUrl} alt={breed.name} width="300" />
                <div>
                  <h2>{breed.name}</h2>
                  <p>Origin: {breed.origin}</p>
                  <p>{breed.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="flex flex-col lg:flex-row gap-5 px-5 lg:px-10 py-5 lg:items-center lg:justify-between bg-slate-50">
        <div className="h-10 w-10">
          <a href="/">
            <img src="logo.svg" alt="Logo"></img>
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
