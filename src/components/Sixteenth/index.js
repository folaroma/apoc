import React from "react";
import ModalCarousel from "../ModalCarousel/";
import SixteenData from "../../data/16.json";

const Sixteenth = () => {
  return (
      <>
      {<ModalCarousel data={SixteenData} />}
      </>
  );
};

export default Sixteenth;
