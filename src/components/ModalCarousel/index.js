import React, { useRef, useState } from "react";
import { Center, Icon, Text, Spacer, Box, Flex, Heading } from "@chakra-ui/react";
import ReactModal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { ImCross } from "react-icons/im"

class ModalCarousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
    };
    
    this.index = 0;

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
              onSlideChange={(swiper) => this.index = swiper.realIndex}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {this.props.data.map((postData) => {console.log(postData.image);
                return <SwiperSlide><img src={postData.image} onClick={this.handleOpenModal}/></SwiperSlide>
              })}
            </Swiper>
        </Center>
        <Flex display="flex" justifyContent="center" h={ "100vh" } w={ "100vw" }>
          <ReactModal
            className="Modal"
            overlayClassName="Overlay"
            isOpen={this.state.showModal}
            shouldCloseOnOverlayClick={true}
            onRequestClose={this.handleCloseModal}
            contentLabel="Minimal Modal Example"
          >
          <Flex>
            <Box pr={"5em"} pb={3}>
              <Heading size="md" display="flex" float="left"> {this.props.data[this.index].name} - {this.props.data[this.index].author} </Heading>
            </Box>
            <Box position="absolute" top="1.5em" right="1.5em">
              <Icon as={ ImCross } color="gray" onClick={this.handleCloseModal} />
            </Box>
          </Flex>
          <Box>
            <Text float="left" pr={5}> {this.props.data[this.index].description} </Text>
          </Box>
          <Box float="left">
          </Box>
          </ReactModal>
        </Flex>
      </>
    );
  }
}

const props = {};

export default ModalCarousel;