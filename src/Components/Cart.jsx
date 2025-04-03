import React, { useState } from "react";
import "../styles/Cart.css";
import oceanImage from "../assets/ocean.jpg"; // Asegúrate de que la imagen está en src/assets/ocean.jpg

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Gorro de natación ecológico", price: 200, quantity: 1 },
    { id: 2, name: "Traje de baño reciclado", price: 800, quantity: 1 },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <header className="cart-header">
        <h1>AquaEco 🏊‍♂️</h1>
      </header>

      <main className="cart-container">
        <div className="cart-content">
          <h2>🛒 Carrito de Compras</h2>
          {cartItems.length === 0 ? (
            <p className="empty-cart">Tu carrito está vacío</p>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <span className="item-name">{item.name}</span>
                    <div className="cart-actions">
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                    <span className="item-price">${item.price * item.quantity}</span>
                    <button className="remove-btn" onClick={() => removeItem(item.id)}>X</button>
                  </div>
                ))}
              </div>
              <h3>Total: ${totalPrice}</h3>
            </>
          )}
        </div>
      </main>

      <footer className="cart-footer">
        <p>🌊 AquaEco - Tienda ecológica de natación</p>
      </footer>
    </div>
  );
};

export default Cart;