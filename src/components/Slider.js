// import { FcPrevious, FcNext } from "react-icons/fc";
import "../assets/home/slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/css/pagination";

import "swiper/css/navigation";
// import Swiper styles
import "swiper/css";
export default function Slider(props) {
  return (
    <>
      <Swiper
        className="slider"
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={window.innerWidth > 1152 ? 2 : "auto"}
        navigation={true}
        // loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {/* <FcPrevious className="prev swiper-button-next" />
      <FcNext className="next swiper-button-prev" /> */}

        {props.Photo.map((item) => {
          return (
            <SwiperSlide key={item.id} className="containSlider">
              <h4>Best Packaging for:{item.alt}</h4>
              <img
                key={item.id}
                className="swiper-slide"
                src={item.src.landscape}
                alt={item.alt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <a href="#" className="solution">
        Find you packaging solution
      </a>
    </>
  );
}
