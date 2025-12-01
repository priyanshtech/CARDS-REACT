import React from "react";

export default function Card(props) {
  const { title, subtitle, price, rating, img ,onAdd } = props;

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden">
      <figure> 
        <img className="object-cover w-full h-50"src ={img} alt={title} />
      </figure>
      <header className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
      </header>
        <section className="px-5"> 
            <p className="text-md font-medium">Price: {price}</p>
            <p className="text-sm text-gray mt-1">Rating: {rating}</p>
        </section>
        <footer className="p-4 ">
            <button onClick={onAdd} className=" w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition">Add to cart</button>
            
        </footer>
    </article>
  );
}
