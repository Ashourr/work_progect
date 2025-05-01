import React from "react";
import "./sidecart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const Cart = ({ onClose,open }) => {
  const cartItems = [
    {
      id: 1,
      name: "Art Deco",
      price: "150 SAR",
      total: "750 SAR",
      quantity: 5,
      image: "/imges/p1.webp",
    },
    {
      id: 2,
      name: "Art Deco",
      price: "150 SAR",
      total: "150 SAR",
      quantity: 1,
      image: "/imges/p2.webp",
    },
    {
      id: 3,
      name: "Art Deco",
      price: "150 SAR",
      total: "300 SAR",
      quantity: 2,
      image: "/imges/p3.webp",
    },
    {
      id: 4,
      name: "Art Deco",
      price: "150 SAR",
      total: "300 SAR",
      quantity: 2,
      image: "/imges/p4.webp",
    },
  ];

  const productTotal = "1350 SAR";
 console.log(open)
  
  return (
    <div
      className="cart-dialog"
      id="cart-dialog"
      role="dialog"
      aria-modal="true"
    >
      <div className="cart-overlay" onClick={onClose} aria-hidden="true"></div>
      <div className="cart-panel-container">
        <div className={`cart-panel`}>
          <div className={`cart-panel-content ${open ? "show" : "out"}`}>
            <div className="cart-panel-header">
              <h2 className="cart-panel-title">Cart</h2>
              <button className="cart-close-button" onClick={onClose}>
                <FontAwesomeIcon
                  className="close-icon"
                  icon={faClose}
                  style={{ color: "rgb(107 114 128)" }}
                />
              </button>
            </div>

            <div className="cart-items-container">
              <ul className="cart-items-list">
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
                    <div className="cart-item-image-container">
                      <Image
                      width={100}
                      height={100}
                      quality={100}
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                      />
                    </div>
                    <div className="cart-item-details">
                      <div className="cart-item-header">
                        <h3>{item.name}</h3>
                        <p className="cart-item-price">{item.price}</p>
                      </div>
                      <div className="cart-item-meta">
                        <p className="cart-item-total">Total {item.total}</p>
                        <div className="cart-quantity-controls">
                          <button className="cart-quantity-button">
                          <FontAwesomeIcon icon={faPlus} />
                          </button>
                          <p className="cart-quantity-value">{item.quantity}</p>
                          <button className="cart-quantity-button">
                          <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <button className="cart-delete-button">
                          <FontAwesomeIcon icon={faTrashCan} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cart-summary">
              <dl className="cart-summary-list">
                <div className="cart-summary-item">
                  <dt className="cart-summary-label">Product Total</dt>
                  <dd className="cart-summary-value">{productTotal}</dd>
                </div>
              </dl>

              <Link href="/checkout"  onClick={onClose} className="cart-checkout-button">Buy now</Link>

              <div className="cart-continue-shopping">
                <p>
                  Or{" "}
                  <button onClick={onClose} className="cart-continue-shopping-button">
                    Continue Shopping ←
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
