"use client";
import { useState } from "react";
import "./checkout.css";
import Checkout_left from "./Checkout_left";
import Checkout_right from "./Checkout_right";

export default function Checkout() {
  return (
    <div className="checkout-container">
      <h1 className="sr-only">Your Order</h1>
      <div className="checkout-grid">
        <div className="checkout-left">
          <Checkout_left />
        </div>
        <div className="checkout-right">
          <Checkout_right />
        </div>
      </div>
    </div>
  );
}
