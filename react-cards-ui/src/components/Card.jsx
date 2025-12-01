import React, {useState} from "react";

export default function Card(props) {
  const { title, subtitle, price, rating, img ,onAdd } = props;
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const toggleFavorite = () => setFavorite(!favorite);
  

  const increrement = () => {
    setQuantity(quantity + 1);
  }
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }}



  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden">
      <figure> 
        <img className="object-cover w-full h-50"src ={img} alt={title} />
      </figure>
      <header className="p-4 flex justify-between items-start">
        <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
        </div>

        <button 
            onClick={toggleFavorite}
            className="p-2 text-xl"
            type="button"
        >
            {favorite ? "❤️" : "🤍"}
        </button>
      </header>

      <section className="px-5"> 
            <p className="text-md font-medium">Price: {price}</p>
            <p className="text-sm text-gray mt-1">Rating: {rating}</p>
            <div className="mt-3 flex items-center gap-3">
                <button onClick={decrement} className="px-3 py-1 rounded-lg border" type="button">−</button>
            <div className="text-center w-8" aria-live="polite">{quantity}</div>
            <button onClick={increrement} className="px-3 py-1 rounded-lg border" type="button">+</button>
            </div>

      </section>

      <footer className="p-4 ">
            <button onClick={()=>onAdd(quantity)} className=" w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition">Add to cart</button>
            
      </footer>
    </article>
  );
}
