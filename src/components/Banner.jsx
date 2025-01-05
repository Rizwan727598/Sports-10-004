import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Updated import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: "https://example.com/banner1.jpg",
      title: "Explore the Outdoors",
      description: "Find the best outdoor gear for your adventures.",
    },
    {
      id: 2,
      image: "https://example.com/banner2.jpg",
      title: "Stay Fit and Active",
      description: "Check out our fitness collection to stay in shape.",
    },
    {
      id: 3,
      image: "https://example.com/banner3.jpg",
      title: "Gear Up for Action",
      description: "High-quality sports gear for all your needs.",
    },
  ];

  return (
    <div className="banner bg-white dark:bg-gray-800">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]} // Include modules here
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-64 md:h-96 w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
                <h2 className="text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h2>
                <p className="mt-2 text-lg md:text-xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
