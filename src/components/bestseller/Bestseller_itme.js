import React from "react";
import "./bestseller.css";
import Image from "next/image";
import Link from "next/link";
export default function Bestseller_itme() {
  return (
    <div className="col-lg-3 col-md-4 col-6  prodcut-itme" title="best-seller">
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
  );
}
