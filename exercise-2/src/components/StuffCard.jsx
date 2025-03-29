import React from "react";

export default function StuffCard({ name, price }) {
  const format = (price) => {
    if (typeof price === "string" && !price.startsWith("$")) {
      return "$ " + price;
    }
    return typeof price === "number" ? "$ " + price : price;
  };

  return (
    <div className="stuff">
      <h4>{name}</h4>
      <small>{format(price)}</small>
    </div>
  );
}