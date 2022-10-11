import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import foto1 from "../Assets/images/carrucel1.jpg"
import foto2 from "../Assets/images/carrucel2.jpg"
import foto3 from "../Assets/images/carrucel3.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carrousel";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

          
          <Link to="/product">
          <img
            src={foto1}
            alt=""
          />
  </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/product">
          <img
            src={foto2}
            alt=""
          />
  </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/product">
          <img
            src={foto3}
            alt=""
          />
  </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}