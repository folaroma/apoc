import React from "react";
import ModalCarousel from "../ModalCarousel/";
import NineteenthData from "../../data/19.json";

const Nineteenth = () => {
  return (
      <>
      {<ModalCarousel data={NineteenthData} />}
      </>
  );
};

export default Nineteenth;
