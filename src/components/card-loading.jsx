import React from "react";

import { FaRegCirclePlay } from "react-icons/fa6";

export default function CardLoading() {
  return (
    <div className="card-item relative w-full  rounded-lg cursor-pointer">
      <div className="relative w-full h-[270px] rounded-lg lg:h-[300px] xl:h-[370px]  overflow-hidden">
        <div className="skeleton  w-full h-full object-cover" />
        <div className="info-box bg-black/50  flex justify-center items-center flex-wrap top-0 right-0 absolute w-full h-full">
          <FaRegCirclePlay className="text-white" size={45} />
        </div>
        <span className="absolute top-2 right-2 p-3 text-white backdrop-blur-md rounded-md">
          16+
        </span>
      </div>
      <b>Loading...</b>
    </div>
  );
}
