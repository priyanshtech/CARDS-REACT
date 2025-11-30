import React from "react";

export default function Card(props) {
  const { title, subtitle, price, rating, img } = props;

  return (
    <article>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <div>{price}</div>
      <div>{rating}</div>
    </article>
  );
}
