"use client";
import React, { useState } from "react";
import "./checkout.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faMinus, faP, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
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
                      <FontAwesomeIcon className="svg" icon={faMinus} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      <FontAwesomeIcon className="svg" icon={faPlus} />
                    </button>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="remove-item"
                      aria-label="Remove item"
                    >
                      <FontAwesomeIcon className="remove-icon" icon={faTrashCan} />
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
