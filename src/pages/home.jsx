// *** Icons ***

import { useEffect, useState } from "react";

import BannerSlider from "../components/banner-slider/banner-slider";
import CardSlider from "../components/card-slider/card-slider";
import { getModuls } from "../services/services";
export default function Home() {
  const [cardItem, setcardItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [movieSections, setMovieSections] = useState([]);

  const content_types = ["anime", "anime serial", "kino", "serial"];

  useEffect(() => {
    getModuls().then(({ data }) => {
      setMovieSections(data["data"]);
    });
  }, []);

  useEffect(() => {
    setcardItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }, []);

  return (
    <section className="pb-10">
      <BannerSlider />

      {content_types.map((item) => (
        <CardSlider
          key={item}
          url={"/content/sorting?content_type=" + item}
          title={item}
        />
      ))}
    </section>
  );
}
