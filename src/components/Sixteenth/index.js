import React, { useRef, useState } from "react";
import { Center, Box, Flex } from "@chakra-ui/react";
import ReactModal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

class Sixteenth extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <>

        <Center>
            <Swiper
              className = "custom-swiper"
              autoHeight = { true }
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className="0"><img src="/images/16century/beastwithsevenheads.jpeg" onClick={this.handleOpenModal}/></SwiperSlide>
              <SwiperSlide className="1"><img src="/images/16century/fourhoursemen.jpeg" onClick={this.handleOpenModal}/></SwiperSlide>
              <SwiperSlide className="2"><img src="/images/16century/gardenofearthlydelights.jpg" onClick={this.handleOpenModal}/></SwiperSlide>
              <SwiperSlide className="3"><img src="/images/16century/lastjudgement.jpg" onClick={this.handleOpenModal}/></SwiperSlide>
            </Swiper>
        </Center>
        <Flex alignItems="center" display="flex" justifyContent="center" h={ "100vh" } w={ "100vw" }>
          <ReactModal
            className="Modal"
            overlayClassName="Overlay"
            isOpen={this.state.showModal}
            shouldCloseOnOverlayClick={true}
            onRequestClose={this.handleCloseModal}
            contentLabel="Minimal Modal Example"
          >
          <p>
          fasghsdkjghsdjkhgdskjs
          </p>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </Flex>
      </>
    );
  }
}

const props = {};

export default Sixteenth;