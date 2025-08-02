import React from 'react';
import frontImage from './assets/image2.jpg';

function App() {
  return (
    <div className="min-h-screen bg-yellow-50">
      
      <header className="bg-gray-800 text-black p-4 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="font-bold text-xl">CrossWords Book Store</h1>
          <nav className="space-x-4">
            <a href="#" className="transform transition-transform duration-300 hover:scale-105 hover:font-bold">Home</a>
            <a href="#" className="transform transition-transform duration-300 hover:scale-105 hover:font-bold">Fiction</a>
            <a href="#" className="transform transition-transform duration-300 hover:scale-105 hover:font-bold">Non-Fiction</a>
            <a href="#" className="transform transition-transform duration-300 hover:scale-105 hover:font-bold">E-Books</a>
            <a href="#" className="transform transition-transform duration-300 hover:scale-105 hover:font-bold">Buy Now</a>
          </nav>
        </div>
      </header>

      <main className="flex justify-center py-10">
        <img src={frontImage} alt="Bookstore Front" className="rounded shadow-md max-w-3xl w-full" />
        <button className="bg-blue-600 text-black px-6 py-3 rounded hover:bg-white-700 transition duration-300">Explore</button>

      </main>

    </div>
  );
}

export default App;
