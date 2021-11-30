import React from "react";
import ModalCarousel from "../ModalCarousel/";
import ContemporaryData from "../../data/contemporary.json";

const Contemporary = () => {
  return (
      <>
      {<ModalCarousel data={ContemporaryData} />}
      </>
  );
};

export default Contemporary;
