import React from "react";
import ModalCarousel from "../ModalCarousel/";
import FilmData from "../../data/film.json";

const Film = () => {
  return (
      <>
      {<ModalCarousel data={FilmData} />}
      </>
  );
};

export default Film;
