import React,{useState} from "react";
import { cards } from "./data/cards";
import Card from "./components/card";
import { useContext } from "react";
import SearchBar from "./components/SearchBar";
import { proplelo } from "./context/Context";


export default function App() {
    const {cartCount,setCartCount,query,setQuery,filtered,handleAddToCart}=useContext(proplelo)
    
  return (
    <main className="min-h-screen flex flex-col bg-gray-100 p-6">
      <header className="max-w-5xl mx-auto mb-10">
        <SearchBar 
         
        />

        <h1 className="text-5xl font-bold">React Cards UI</h1>
        <p className="text-gray-600 text-2xl mt-2">Cart: {cartCount}</p>
      </header>

      <section className="max-w-5xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
     
        {filtered.map((item) => (
          <Card key={item.id} {...item} onAdd={handleAddToCart}/>
        ))}
      </section>
    </main>
  );
}
