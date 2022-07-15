import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt incidunt iusto fugiat repellendus, sint impedit accusamus aut fugit sed autem asperiores. Culpa deserunt sed voluptatem eum magnam nostrum possimus sunt!"
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi suscipit provident id commodi nam accusantium, ratione dicta laboriosam amet quaerat aliquid perferendis, maiores quas! Quos ex unde totam excepturi?"
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi velit ad architecto odit consequuntur, dolore facere ipsa praesentium repellat, mollitia placeat veritatis dolorum reprehenderit voluptas. Tempore et porro minima vel."
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sapiente suscipit mollitia odit corporis atque voluptate odio fuga illum, at, quo deleniti facilis delectus consequuntur. Beatae est assumenda quaerat eum!"
  },
]


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testinmonials</h2>

      <Swiper Swiper className="container testimonials__container"
        // install Swiper modules
      spaceBetween={40}
      slidesPerView={1}
      modules={[Pagination]} 
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
          data.map(({avatar,name,review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
