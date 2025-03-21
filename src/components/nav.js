import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-rose-50 px-5 lg:px-10 h-24 flex items-center justify-between">
      <a href="/" className="h-10 w-10">
        <img src="logo.png" alt="Logo" />
      </a>

      {/* Burger Menu Icon */}
      <button
        className="lg:hidden block text-gray-700"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <div
        className={`fixed top-24 right-0 w-full h-full bg-rose-50 transform transition-transform duration-300 lg:static lg:transform-none lg:flex lg:h-auto lg:w-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <ul className="flex flex-col lg:flex-row gap-10 p-10 lg:p-0 items-center  lg:justify-between h-full lg:h-auto bg-rose-50">
          <li>
            <a href="#" className="block text-lg py-2 px-4">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block text-lg py-2 px-4">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block text-lg py-2 px-4">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
