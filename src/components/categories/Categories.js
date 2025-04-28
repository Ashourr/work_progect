"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./categories.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Categories() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div style={{ maxWidth: "98%" }} className="categories mt-3 container">
        <h2>Categories</h2>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          className="swiper-container"
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1.08,
              spaceBetween: 5,
            },
          }}
        >
          <SwiperSlide>
            <div className="last-slide">
              <Link href="/bags">
                <div className="last-slide-img">
                  <Image
                    alt=".."
                    width={300}
                    quality={100}
                    height={300}
                    src={"/imges/s1.webp"}
                  />
                </div>
                <h4>
                  BAGS <FontAwesomeIcon className="i" icon={faArrowRight} />
                </h4>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="last-slide">
              <Link href="/bags">
                <div className="last-slide-img">
                  <Image
                    alt=".."
                    width={300}
                    quality={100}
                    height={300}
                    src={"/imges/s2.webp"}
                  />
                </div>
                <h4>
                  SHOES <FontAwesomeIcon className="i" icon={faArrowRight} />
                </h4>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="last-slide">
              <Link href="/bags">
                <div className="last-slide-img">
                  <Image
                    alt=".."
                    width={300}
                    quality={100}
                    height={300}
                    src={"/imges/s1.webp"}
                  />
                </div>
                <h4>
                  MINI EDDY{" "}
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </h4>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="last-slide">
              <Link href="/bags">
                <div className="last-slide-img">
                  <Image
                    alt=".."
                    width={300}
                    quality={100}
                    height={300}
                    src={"/imges/s4.webp"}
                  />
                </div>
                <h4>
                  CLOTHES <FontAwesomeIcon className="i" icon={faArrowRight} />
                </h4>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
