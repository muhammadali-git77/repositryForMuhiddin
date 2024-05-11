import { useParams, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import BannerTrailer from "../components/common/banner-item";
import Info from "../components/common/info/info";
import Movie from "../components/movie/movie";

import { getMovie } from "../services/services";

export default function Retrive() {
  const [searchParmams] = useSearchParams();
  
  const slug = searchParmams.get("slug");
  let { id } = useParams();

  const [movieIsPlay, setMovieIsPlay] = useState(false);

  useEffect(() => {
    getMovie(id, slug).then(({ data }) => {
      console.log(data);
    });
  }, []);
  
  return (
    <main>
      {movieIsPlay ? (
        <Movie />
      ) : (
        <BannerTrailer myFunc={() => setMovieIsPlay(true)} video={true} />
      )}
      <Info />
    </main>
  );
}
