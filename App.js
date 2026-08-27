import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then(response => response.json())
      .then(data => {
        setFoods(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function addToCart(food) {
    setCart([...cart, food]);
  }

  function placeOrder() {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    alert("Order placed successfully!");

    setCart([]);
  }

  let total = 0;

  cart.forEach(food => {
    total = total + food.price;
  });

  return (
    <div>

      <h1>College Canteen</h1>

      <h2>Food Menu</h2>

      <div className="food-container">

        {foods.map(food => (

          <div className="food-card" key={food._id}>

            <h3>{food.name}</h3>

            <p>Price: ₹{food.price}</p>

            <button onClick={() => addToCart(food)}>
              Add to Cart
            </button>

          </div>

        ))}

      </div>

      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (

        cart.map((food, index) => (

          <p key={index}>
            {food.name} - ₹{food.price}
          </p>

        ))

      )}

      <h3>Total: ₹{total}</h3>

      <button onClick={placeOrder}>
        Place Order
      </button>

    </div>
  );
}

export default App;