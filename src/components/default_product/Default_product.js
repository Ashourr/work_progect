import Image from "next/image";
import React from "react";
import "./default_product.css";
import Link from "next/link";

export default function Default_product() {
  return (
    <div className="default-product">
      <div className="container">
        <div className="title">
          <h2>.</h2>
          <div>
            <Link href={"/shoes"}>More</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 default-itme">
            <div className="default-product-itme-1" title="Art Deco">
              <Link href={"/products/5"}>
                <div className="img">
                  <span className="span">9.09%</span>
                  <Image
                    src={"/imges/p2.webp"}
                    alt=".."
                    className="img-fluid"
                    width={300}
                    height={300}
                    quality={100}
                  />
                </div>
                <div className="content">
                  <h6>Art Deco</h6>
                  <div className="price">
                    <p className="price-1">150 SAR</p>
                    <p className="price-2">
                      <del>150 SAR</del>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-lg-3 default-itme">
            <div className="default-product-itme-2" title="Art Deco">
              <Link href={"/products/5"}>
                <div className="img">
                  <span className="span">9.09%</span>
                  <Image
                    src={"/imges/p2.webp"}
                    alt=".."
                    className="img-fluid"
                    width={300}
                    height={300}
                    quality={100}
                  />
                </div>
                <div className="content">
                  <h6>Art Deco</h6>
                  <div className="price">
                    <p className="price-1">150 SAR</p>
                    <p className="price-2">
                      <del>150 SAR</del>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="default-product-itme-2" title="Art Deco">
              <Link href={"/products/5"}>
                <div className="img">
                  <span className="span">9.09%</span>
                  <Image
                    src={"/imges/p3.webp"}
                    alt=".."
                    className="img-fluid"
                    width={300}
                    height={300}
                    quality={100}
                  />
                </div>
                <div className="content">
                  <h6>Art Deco</h6>
                  <div className="price">
                    <p className="price-1">150 SAR</p>
                    <p className="price-2">
                      <del>150 SAR</del>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-lg-3 default-itme">
            <div className="default-product-itme-2" title="Art Deco">
              <Link href={"/products/5"}>
                <div className="img">
                  <span className="span">9.09%</span>
                  <Image
                    src={"/imges/p5.webp"}
                    alt=".."
                    className="img-fluid"
                    width={300}
                    height={300}
                    quality={100}
                  />
                </div>
                <div className="content">
                  <h6>Art Deco</h6>
                  <div className="price">
                    <p className="price-1">150 SAR</p>
                    <p className="price-2">
                      <del>150 SAR</del>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="default-product-itme-2" title="Art Deco">
              <Link href={"/products/5"}>
                <div className="img">
                  <span className="span">9.09%</span>
                  <Image
                    src={"/imges/p4.webp"}
                    alt=".."
                    className="img-fluid"
                    width={300}
                    height={300}
                    quality={100}
                  />
                </div>
                <div className="content">
                  <h6>Art Deco</h6>
                  <div className="price">
                    <p className="price-1">150 SAR</p>
                    <p className="price-2">
                      <del>150 SAR</del>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
