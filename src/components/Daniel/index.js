import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";

const Daniel = () => {
  return (
      <>
      <Flex p={"5em"}>
        <Box ms={"5em"}>
          <Heading fontWeight="bold" size="4xl">About Me</Heading>
          <Text fontSize="lg" mt={"3em"} w={"50vw"} lineHeight={"200%"}>
            Hi! My name is <span style={{color: "#f40"}}>Daniel Kim</span> and, I'm currently a second year Computer Science student at Northeastern University!
            Because of my major, I really wanted to do something relating to it for this particular project for PHIL1260!
            I figured that I would combine something that I'm passionate about with what this course is all about, leading me to developing this website!
            I put a lot of work into this, so hopefully you enjoy! :)
          </Text>
        </Box>
      </Flex>
      </>
  );
};

export default Daniel;
