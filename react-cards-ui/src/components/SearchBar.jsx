import React from "react";
import { useContext } from "react";
import { proplelo } from "../context/Context";

export default function SearchBar() {
  const {query,setQuery}=useContext(proplelo)


    function handleInputChange(event) {
  onQueryChange(event.target.value);
}

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={handleInputChange}
      className="px-3 py-2 border rounded-lg w-full max-w-md"

    />
  );
}
