import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./bestseller.css";
import Bestseller_itme from "./Bestseller_itme";

export default function Bestseller() {
  return (
    <div className="container">
      <div className="best-seller">
        <div className="title">
          <h2>.Best Seller</h2>
          <div className="link">
            <Link href={"/clothes"}>More</Link>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-3 col-md-4 col-6  prodcut-itme"
            title="best-seller"
          >
            <Link href={"/products/5"}>
              <div className="best-seller-item">
                <Image
                  className="best-seller-image"
                  alt="best-seller"
                  src="/imges/p1.webp"
                  width={205}
                  height={225}
                />
                <h6>Art Deco</h6>
                <div className="price">
                  <p className="best-seller-price">150 SAR</p>
                  <p className="best-seller-old-price">
                    <del>100 SAR</del>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-4 col-6  prodcut-itme"
            title="best-seller"
          >
            <Link href={"/products/5"}>
              <div className="best-seller-item">
                <Image
                  className="best-seller-image"
                  alt="best-seller"
                  src="/imges/p2.webp"
                  width={205}
                  height={225}
                />
                <h6>Art Deco</h6>
                <div className="price">
                  <p className="best-seller-price">150 SAR</p>
                  <p className="best-seller-old-price">
                    <del>100 SAR</del>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-4 col-6  prodcut-itme"
            title="best-seller"
          >
            <Link href={"/products/5"}>
              <div className="best-seller-item">
                <Image
                  className="best-seller-image"
                  alt="best-seller"
                  src="/imges/p3.webp"
                  width={205}
                  height={225}
                />
                <h6>Art Deco</h6>
                <div className="price">
                  <p className="best-seller-price">150 SAR</p>
                  <p className="best-seller-old-price">
                    <del>100 SAR</del>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-4 col-6  prodcut-itme"
            title="best-seller"
          >
            <Link href={"/products/5"}>
              <div className="best-seller-item">
                <Image
                  className="best-seller-image"
                  alt="best-seller"
                  src="/imges/p4.webp"
                  width={205}
                  height={225}
                />
                <h6>Art Deco</h6>
                <div className="price">
                  <p className="best-seller-price">150 SAR</p>
                  <p className="best-seller-old-price">
                    <del>100 SAR</del>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-4 col-6  prodcut-itme"
            title="best-seller"
          >
            <Link href={"/products/5"}>
              <div className="best-seller-item">
                <Image
                  className="best-seller-image"
                  alt="best-seller"
                  src="/imges/p5.webp"
                  width={205}
                  height={225}
                />
                <h6>Art Deco</h6>
                <div className="price">
                  <p className="best-seller-price">150 SAR</p>
                  <p className="best-seller-old-price">
                    <del>100 SAR</del>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-4 col-6  prodcut-itme"
            title="best-seller"
          >
            <Link href={"/products/5"}>
              <div className="best-seller-item">
                <Image
                  className="best-seller-image"
                  alt="best-seller"
                  src="/imges/p1.webp"
                  width={205}
                  height={225}
                />
                <h6>Art Deco</h6>
                <div className="price">
                  <p className="best-seller-price">150 SAR</p>
                  <p className="best-seller-old-price">
                    <del>100 SAR</del>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <Bestseller_itme />
          <Bestseller_itme />
        </div>
      </div>
    </div>
  );
}
