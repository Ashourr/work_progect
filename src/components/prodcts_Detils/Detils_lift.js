"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./prodcut_detils.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ProductGallery = () => {
  const productImages = [
    "/imges/p1.webp",
    "/imges/p2.webp",
    "/imges/p3.webp",
    "/imges/p4.webp",
    "/imges/p5.webp",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="product-gallery">
      {/* Desktop */}
      <div className="desktop-view">
        <div className="thumbnails">
          {productImages.map((src, index) => (
            <button
              key={index}
              className={`thumb-button ${
                index === activeIndex ? "selected" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="thumb-img-wrapper">
                <Image
                  width={300}
                  height={300}
                  quality={100}
                  src={src}
                  alt=""
                  className="thumb-img"
                />
              </span>
              <span
                className={`thumb-ring ${
                  index === activeIndex ? "selected-ring" : ""
                }`}
                aria-hidden="true"
              ></span>
            </button>
          ))}
        </div>
        <div className="main-image">
          <Image
            width={300}
            height={100}
            quality={100}
            src={productImages[activeIndex]}
            alt={productImages[activeIndex]}
            className="main-img"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="mobile-view">
        <Swiper
          slidesPerView={1.05}
          spaceBetween={5}
          loop={true}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          onSlideChange={(swiper) => {
            const realIndex = swiper.realIndex;
            setActiveIndex(realIndex);
          }}
          className="slider"
        >
          {productImages.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                width={300}
                height={300}
                quality={100}
                src={src}
                alt={src}
                className="slider-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="slider-controls">
          <button
            aria-label="prev-button"
            className="slider-button prev-button"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <p className="slider-counter">
            {activeIndex + 1} / {productImages.length}
          </p>
          <button
            aria-label="next-button"
            className="slider-button next-button"
          >
            <FontAwesomeIcon icon={faAngleRight} />
            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
