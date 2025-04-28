"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // ✅ التعديل هنا
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./headerslider.css";
import Image from "next/image";
export default function Headerslider() {
  return (
    <div style={{overflow: "hidden"}} >
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 7000 }}

        className="swiper-container"
      >
        <SwiperSlide>
          <Image width={1000} height={500} quality={100} src="/imges/h1.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image  width={1000} height={500} quality={100} src="/imges/h2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image  width={1000} height={500} quality={100} src="/imges/h3.jpg" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
