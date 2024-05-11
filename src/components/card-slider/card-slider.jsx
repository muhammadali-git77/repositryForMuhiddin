import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Card from "../card";
import { Link } from "react-router-dom";
import { getCardItems } from "../../services/services";
import { IoIosArrowForward } from "react-icons/io";
import CardLoading from "../card-loading";

export default function CardSlider({ title, url }) {
  const [items, setItems] = useState(false);

  useEffect(() => {
    getCardItems(url).then(({ data }) => {
      setItems(data["results"]);
    });
  }, [url]);

  let loadingItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container mt-14">
      <Link to="/movies" className="text-3xl font-semibold cursor-pointer">
        {title} <IoIosArrowForward className="inline" />
      </Link>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mt-5 !pb-12"
      >
        {console.log(items)}
        {items
          ? items?.map((item) => (
              <SwiperSlide key={item.movieId}>
                <Card item={item} />
              </SwiperSlide>
            ))
          : loadingItems.map((item) => (
              <SwiperSlide key={item.movieId}>
                <CardLoading />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
