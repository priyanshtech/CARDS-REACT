import React from "react";
import { cards } from "./data/cards";
import Card from "./components/card";

export default function App() {
  return (
    <main>
      <h1>React Cards UI</h1>

      <section >
        {cards.map((item) => (
            <Card{...item}
            />))}

             
      </section>
    </main>
  );
}
