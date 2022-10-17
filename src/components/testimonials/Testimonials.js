import React from "react";
import "./testimonials.css";
import AVRT1 from "../../assets/avatar1.jpg";
import AVRT2 from "../../assets/avatar2.jpg";
import AVRT3 from "../../assets/avatar3.jpg";
import AVRT4 from "../../assets/avatar4.jpg";

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const data = [
  {
    // id:1,
    avatar: AVRT1,
    name: "Rosy",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate aspernatur atque vel veniam error perferendisexercitationem, ut minima assumenda, nesciunt commodi reprehenderit sunt, maiores praesentium dignissimos quis asperiores accusamus tenetur.",
  },{
    // id:1,
    avatar: AVRT2,
    name: "Rohan",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate aspernatur atque vel veniam error perferendisexercitationem, ut minima assumenda, nesciunt commodi reprehenderit sunt, maiores praesentium dignissimos quis asperiores accusamus tenetur.",
  },{
    // id:1,
    avatar: AVRT3,
    name: "John",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate aspernatur atque vel veniam error perferendisexercitationem, ut minima assumenda, nesciunt commodi reprehenderit sunt, maiores praesentium dignissimos quis asperiores accusamus tenetur.",
  },{
    // id:1,
    avatar: AVRT4,
    name: "Saniya",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate aspernatur atque vel veniam error perferendisexercitationem, ut minima assumenda, nesciunt commodi reprehenderit sunt, maiores praesentium dignissimos quis asperiores accusamus tenetur.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}

            pagination={{ clickable: true }}
            >
        {
          data.map(({avatar,name,review}, index)=>{
            return(
              <SwiperSlide key={index}className="testimonials">
          <div className="client__avatar">
            <img src={avatar} alt="avatar1" />
          </div>
          <h5 className="client__name">{name} </h5>
          <small className="client__review">
            {review}
          </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
