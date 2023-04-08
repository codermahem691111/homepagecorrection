import React from 'react'
import D1  from './images/doctor.jpg'
import  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './styles.css'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";




export const Carousel = () => {
  return (
    <>
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper" id='mySwiper'
  >
 
  <SwiperSlide  className='slide1'>Slide1</SwiperSlide>
  <SwiperSlide className='slide2'>Slide2</SwiperSlide>
  </Swiper>
    
    </>
  )
}
