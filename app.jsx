import React from 'react';
import frontImage from "C:\Users\chetn\OneDrive\Desktop\GFG-task-1\GFG task-2\image2.jpg"

function App()
{
    return(
        <div className="min-h-screen bg-yellow-50">
            <header className="bg-grey text-white p-4 shadow">
                <div className="max-w-6xl mx-auto flex justify-between items-center"></div>
                <h1 className="font-bold">CrossWords Book Store</h1>
                <a href="#" className="transform transition-transform duration-300 hover:scale-105 hover:font-bold">Home</a>
                <a href="#" className="transform transition-transform duration-300 hover:scale-105 hover:font-bold">Fiction</a>
                <a href="#" className="transform transition-transform duration-300 hover:scale-105 hover:font-bold">Non-Fiction</a>
                <a href="#" className="transform transition-transform duration-300 hover:scale-105 hover:font-bold">E-Books</a>
                <a href="#" className="transform transition-transform duration-300 hover:scale-105 hover:font-bold">Buy Now</a>
            </header>
            
            <body>
                <img src="frontImage"></img>
            </body>

        </div>
    );
}