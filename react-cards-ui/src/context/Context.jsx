import { createContext } from "react";
import { useState } from "react";
import { cards } from "../data/cards";
export const proplelo=createContext()

export default function PropProvider({children}){
    const[cartCount, setCartCount] = useState(0);
        const [query, setQuery] = useState("");
    
        const filtered = cards.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    
    
        function handleAddToCart(qty) {
            setCartCount(cartCount + qty);
        }
    
    return(
        
       <proplelo.Provider value={{cartCount,setCartCount,query,setQuery,filtered,handleAddToCart}}>
        {children}

       </proplelo.Provider>
    )
}