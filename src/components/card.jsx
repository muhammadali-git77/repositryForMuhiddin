import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Card({ item }) {
  return (
    <div className="card-item relative w-full  rounded-lg cursor-pointer">
      <div className="relative w-full h-[270px] rounded-lg lg:h-[300px] xl:h-[370px]  overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={item.poster_card}
          alt="alt"
        />

        <Link
          to={`/${item.id}`}
          className="info-box bg-black/50  flex justify-center items-center flex-wrap top-0 right-0 absolute w-full h-full"
        >
          <FaRegCirclePlay className="text-white" size={45} />
          <span className="absolute bottom-0 left-0 text-white p-3">
            {item.genre?.map(({ id, genre }) => (
              <React.Fragment key={id}>
                <span>{genre.item}</span>
                <span className="last:hidden">, </span>
              </React.Fragment>
            ))}
          </span>
        </Link>
        <span className="absolute top-2 right-2 p-3 text-white backdrop-blur-md rounded-md">
          16+
        </span>
      </div>
      <b className="mt-4">{item.title}</b>
    </div>
  );
}
