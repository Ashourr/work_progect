"use client";
import { useState } from "react";
// import styles from './ProductPage.module.css';
import "./prodcut_detils.css";
import {
  faChevronDown,
  faCreditCard,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Detils_Form from "./Detils_Form";
export default function Detils_right() {
  const [openShipping, setOpenShipping] = useState(false);
  const [openReturn, setOpenReturn] = useState(false);
  return (
    <div className="productContainer">
      <div className="productHeader">
        <h1 className="productName">Art Deco</h1>

        <div className="priceContainer">
          <div className="priceBeforeDiscount">
            <p className="priceLabel">Price Before Discount</p>
            <p className="originalPrice">165</p>
            <span className="currency">SAR</span>
          </div>

          <div className="priceAfterDiscount">
            <p className="priceLabel">Price After Discount</p>
            <p id="sale-price" className="discountedPrice">
              150
            </p>
            <span className="currencyLarge">SAR</span>
          </div>
        </div>

        <div className="ratingContainer">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} className="starIcon" />
            ))}
          </div>
          {/* <p className="srOnly">0 From 5 Stars</p> */}
        </div>
      </div>

      <div className="actionButtons">
        <button className="buyNowButton">
          <FontAwesomeIcon icon={faCreditCard} className={"buttonIcon"} />
          Buy it now
        </button>

        <button className={"addToCartButton"}>
          {/* <FontAwesomeIcon icon={faBagShopping} className={"cartIcon"} /> */}
          <Image
            src={"/imges/shopping-bag-svgrepo-com.svg"}
            className="cartIcon"
            width={30}
            height={20}
            alt="shopping-bag"
          />
          Add to cart
        </button>
      </div>

      <div className="infoSections">
        <div className="infoSection">
          <button
            className="infoButton"
            onClick={() => setOpenShipping(!openShipping)}
          >
            <span className="infoButtonContent">
              <Image
                width={100}
                height={100}
                src={"/imges/shipment-check.svg"}
                alt="..."
                className="infoIcon"
              />
              Shipping & Returns
            </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`chevronIcon ${openShipping ? "rotate" : ""}`}
            />
          </button>
          {openShipping && (
            <div className="infoContent">
              <p>
                We ship all over Egypt within 2-5 business days (Friday &
                Saturday are not business days).
              </p>
              <p>
                <strong>Delivery Time Per Destination:</strong>
              </p>
              <ul>
                <li>Cairo & Alex : (2-4 business days)</li>
                <li>Delta, Suez, Portsaid, Ismailya : (3-5 business days)</li>
                <li>
                  Beni Swef, Menya, Asyout, SohagQatar : (3-5 business days)
                </li>
                <li>Qena, Luxor, Aswan : (1 week business days)</li>
                <li>
                  North Sinai, Red Sea, New Valley, Sallom : (1 week business
                  days)
                </li>
              </ul>
              <p>
                <strong>Exchanges for Local Orders (Egypt):</strong>
              </p>
              <ul>
                <li>
                  Exchanges could be done within 14 days of receiving the order,
                  with an extra fees for the exchange shipping.
                </li>
                <li>
                  Refunds could be done within 14 days of receiving the order,
                  with an extra fees for the exchange shipping.
                </li>
                <li>Refund or exchange could be via our varies channels</li>
                <li>
                  Once you{"`"}d like to talk to us, we{"`"}re here to listen you for
                  feedback, complains or exchanges. You could reach out vis our
                  various channels
                </li>
              </ul>
              <p>
                <strong>
                  Our working hours are 11 PM - 11 PM (Friday & Saturday are
                  off). All inquiries will be attended to within one working day
                </strong>
              </p>
            </div>
          )}
        </div>

        <div className="infoSection">
          <button
            className="infoButton"
            onClick={() => setOpenReturn(!openReturn)}
          >
            <span className="infoButtonContent">
              <Image
                width={100}
                height={100}
                src={"/imges/return-arrow.svg"}
                alt="..."
                className="infoIcon"
              />
              Request a Return | Exchange
            </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`chevronIcon ${openReturn ? "rotate" : ""}`}
            />
          </button>
          {openReturn && (
            <div className="infoContent">
              <p className="m-0">
                Exchanges: Exchanges are available through our Exchange Request
                Form kindly fill the form and we will process your exchange
                order. You can exchange Both sizes and products. Exchanges are
                subject to 40 EGP shipping fees. ( Price difference in the
                exchange order has to higher than or the same as your initial
                purchase).
              </p>
              <p>
                Refunds: Refunds are available for in any of our stores within
                14 of your delivery. You can Refund for any reason.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="productDescription">
        <p>
          <em>
            This is a demonstration store. You can purchase products like this
            from&nbsp;
            <a
              href="https://www.mlouye.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="externalLink"
            >
              Mlouye
            </a>
            .
          </em>
        </p>
        <p>
          <em>
            Our architectural, origami inspired shoulder bag, now has a new
            dimension. It can be converted into a wrist bag just with a quick
            move. The shoulder strap can easily be removed, so you can slung it
            from your wrist or use as a clutch. It has plenty of room inside for
            your essentials including a large phone, small wallet, and 300 ml
            water bottle. Made from smooth leather and has a suede top with
            two-way zip fastening. Interior features two slip pockets.&nbsp;
          </em>
        </p>
        <h2>Materials</h2>
        <p>
          <em>
            Crafted from smooth calf leather. Canvas lining. Brushed gold
            hardware. Two interior pockets. Detachable and adjustable shoulder
            strap.
          </em>
        </p>
        <h2>Dimensions</h2>
        <p>
          <em>h:21 X w:28 cm (8 1/2 X 11 1/4 in.)</em>
        </p>
        <h2>Care Instructions</h2>
        <p>
          <em>
            Use a soft damp cloth and a drop of mild soap to remove any haze.
            Air dry.
          </em>
        </p>
      </div>

      <div className="checkoutFormContainer">
        <Detils_Form />
      </div>
    </div>
  );
}
