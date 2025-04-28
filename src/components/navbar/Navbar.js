"use client";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import React, { useState } from "react";
import Sidebar from "../siedbar/Sidebar";
import Sidecart from "@/components/sideCart/Sidecart";

export default function Navbar() {
  let [show, setshow] = useState("");
  let [showCart, setShowCart] = useState(false);
let [cartOpen, setCartOpen] = useState(false);

function handleOpenCart() {
  setShowCart(true);
  setCartOpen(true); // عشان يضيف كلاس "show"
}

function handleCloseCart() {
  setCartOpen(false); // يشغل كلاس "out"
  setTimeout(() => {
    setShowCart(false); // يخفي العنصر بعد ما الأنيميشن يخلص
  }, 300); // نفس مدة الـ animation بالـ CSS
}
  function notshow() {
    if (show) {
      setshow("");
    } else {
    }
  }
  return (
    <div className={`nav-navbar nav-bar sticky-top`}>
      <nav className="container sticky-top  default-header-container">
        <div>
          <div className="header-bar">
            {/* زر القائمة (للأجهزة الصغيرة) */}
            <div className="menu-button">
              <div
                className="menu-bar"
                href="#"
                onClick={() => {
                  setshow("show");
                }}
              >
                <FontAwesomeIcon className="menu-icon i" icon={faBars} />
              </div>
            </div>

            {/* شعار */}
            <div className="logo mb-2">
              <Link href="/">
                <Image
                  width={85}
                  height={65}
                  className="logo-image"
                  src="/imges/1734867857871947837.webp"
                  alt="Logo"
                  quality={100}
                />
              </Link>
            </div>

            {/* عناصر القائمة (يمين) */}
            <div className="header-right">
              <div className="search-button">
                <Link
                  style={{ display: "flex", fontSize: "20px" }}
                  className="search-link"
                  href="/search"
                >
                  <FontAwesomeIcon
                    className="search-icon i"
                    icon={faMagnifyingGlass}
                  />
                </Link>
              </div>
              <div className="cart-button" onClick={handleOpenCart}>
                <Link className="cart-link" href="#">
                  <span className="cart-count">4</span>
                  <Image
                    src={"/imges/shopping-bag-svgrepo-com.svg"}
                    className="cart-icon i"
                    width={20}
                    height={20}
                    alt="shopping-bag"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* روابط إضافية */}
          <div className="header-links">
            <Link href="/bags">BAGS</Link>
            <Link href="/shoes">SHOES</Link>
            <Link href="/clothes">CLOTHES</Link>
            <Link href="/shipping-policy">Shipping policy</Link>
            <Link href="/refund-policy">Refund policy</Link>
          </div>
        </div>
      </nav>
      <Sidebar show={show} notshow={notshow} />
      {/* {showCart === true && <Sidecart open={showCart} onClose={() => setshowCart(false)} />} */}
      {showCart && <Sidecart onClose={handleCloseCart} open={cartOpen} />}
    </div>
  );
}
