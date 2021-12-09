import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";

const David = () => {
  return (
      <>
      <Flex p={"5em"}>
        <Box ms={"5em"}>
          <Heading fontWeight="bold" size="4xl">About Me</Heading>
          <Text fontSize="lg" mt={"3em"} w={"50vw"} lineHeight={"200%"}>
          Hello! My name's <span style={{color: "#f40"}}>David Huh</span> and I'm also a second year Computer Science student at Northeastern University! 
          Like my partner, because of my major in CS, I was interested in doing a project that would allow me utilize my skills from CS and interests in this course. 
          Thus, we ended up creating this website! I hope you enjoy!
          </Text>
        </Box>
      </Flex>
      </>
  );
};

export default David;
