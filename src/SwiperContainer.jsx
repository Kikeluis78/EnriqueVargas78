// src/components/SwiperContainer.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import Home from "../pages/Home";
import Precios from "../pages/Precios";
import Precios2 from "../pages/Precios2";
import Contacto from "../pages/Contacto";
import Clientes from "../pages/Clientes";
import Secc2 from "../pages/Secc2";

export default function SwiperContainer() {
  return (
    <div className="md:hidden"> {/* Solo móviles */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide><Home /></SwiperSlide>
        <SwiperSlide><Precios /></SwiperSlide>
        <SwiperSlide><Precios2 /></SwiperSlide>
        <SwiperSlide><Contacto /></SwiperSlide>
        <SwiperSlide><Clientes /></SwiperSlide>
        <SwiperSlide><Secc2 /></SwiperSlide>
      </Swiper>
    </div>
  );
}
