import React from 'react'
import book from '../assets/images/png/cover-1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from './Button';

const Carousel = () => {
    const books = [
          {
            id: 1,
            title: "Title 1",
            description: "Lorem ipsum dolor sit amet consectetur Lacinia etiam elementum senectus ac integer. Elit nisi platea aliquet viverra.",
            image: book
          },
          {
            id: 2,
            title: "Title 2",
            description: "Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum senectus ac integer. Elit nisi platea aliquet viverra.",
            image: book
          },
          {
            id: 3,
            title: "Title 3",
            description: "Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum senectus ac integer. Elit nisi platea aliquet viverra.",
            image: book
          },
          {
            id: 4,
            title: "Title 4",
            description: "Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum senectus ac integer. Elit nisi platea aliquet viverra.",
            image: book
          },
        ];
  return (
    <>
       <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-12">
      <Swiper 
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        className="mySwiper"
      >
        <div className="swiper-wrapper">
          {books.map((b) => (
            <SwiperSlide key={b.id}>
              <div
                className="
                  flex flex-col gap-5 justify-center items-center text-center
                  min-w-[80%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[22%]
                  mx-auto
                "
              >
                <img src={b.image} alt={b.title} className="h-96 w-52 object-contain" />
                <h3 className="text-4xl">{b.title}</h3>
                <p className="text-md font-noto text-center max-w-80 md:max-w-96">{b.description}</p>
                <div>
                  <Button label="Purchase Now" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div
          className="
            swiper-button-prev !left-8 sm:!left-4 lg:!left-1
             !text-white !
            !flex !items-center !justify-center !p-0
          "
        ></div>
        <div
          className="
            swiper-button-next !right-2 sm:!right-4 lg:!right-1
            !w-10 !h-10  !text-white 
            !flex !items-center !justify-center !p-0
          "
        ></div>
      </Swiper>
    </div>
    </>
  )
}

export default Carousel