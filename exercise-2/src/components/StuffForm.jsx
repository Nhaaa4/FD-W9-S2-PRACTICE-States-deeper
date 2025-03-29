import React, { useState } from "react";

const StuffForm = ({ onAddStuff }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !price.trim()) {
      return;
    }

    const newStuff = {
      name: name.trim(),
      price: price.trim()
    };

    onAddStuff(newStuff);
    
    // Log for testing
    console.log(`A new object named ${name}, price $${price} will be added to the list`);

    // Reset form, i don't use to fit the exercise example.
    // setName("");
    // setPrice("");
  };

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <h2>Add New Stuff</h2>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <button type="submit">Add Item</button>
    </form>
  );
};

export default StuffForm;