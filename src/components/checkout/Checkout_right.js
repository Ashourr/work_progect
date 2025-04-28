"use client";
import React, { useState } from "react";
import "./checkout.css";
import Image from "next/image";
export default function Checkout_right() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Art Deco",
      price: 150,
      quantity: 2,
      total: 300,
      image: "/imges/p1.webp",
    },
    {
      id: 2,
      name: "Art Deco",
      price: 150,
      quantity: 2,
      total: 300,
      image: "/imges/p1.webp",
    },
    {
      id: 3,
      name: "Art Deco",
      price: 150,
      quantity: 1,
      total: 150,
      image: "/imges/p1.webp",
    },
  ]);
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity, total: item.price * newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.total, 0);

  return (
    <section aria-labelledby="summary-heading" className="order-summary">
      <div className="summary-content">
        <h2 id="summary-heading">Order Summary</h2>

        <ul className="cart-items">
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="item-image">
                <Image
                  width={300}
                  height={300}
                  quality={100}
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className="item-details">
                <div className="item-header">
                  <h3>{item.name}</h3>
                  <p>{item.price} SAR</p>
                </div>

                <div className="item-info">
                  <p className="item-total">Total {item.total} SAR</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      aria-label="Decrease quantity"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="remove-item"
                      aria-label="Remove item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <dl className="order-totals">
          <div className="total-row">
            <dt>Product Total</dt>
            <dd>{subtotal} SAR</dd>
          </div>

          <div className="total-row">
            <dt>Shipping Cost</dt>
            <dd className="shipping-cost">Free Shipping</dd>
          </div>

          <div className="total-row grand-total">
            <dt>Total</dt>
            <dd>{subtotal} SAR</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
