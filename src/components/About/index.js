import React from "react";
import { Flex, Box, Text, Heading } from "@chakra-ui/react";

const About = () => {
  return (
      <>
      <Flex p={"5em"}>
        <Box ms={"5em"}>
          <Heading fontWeight="bold" size="4xl">PHIL1260</Heading>
          <Text fontSize="lg" mt={"3em"} w={"50vw"} lineHeight={"200%"}>
            <span style={{color: "#f40"}}>Apocalypticism in Film</span>, or PHIL1260, is an introductory-interdisciplinary course in Religious Studies and Film at Northeastern University, which examines the diverse and changing presentation of apocalypticism in film.
            This class is run by <span style={{color: "#f40"}}>Professor Shiela F. Winborne</span>, who is a faculty member on the Religious Studies side of the Philosophy and Religion department, and was run entirely asynchronously online due to COVID-19.
            This website was created for the <span style={{color: "#f40"}}>Creative Final Project for this course</span>, and consists of various forms of apocalypticism in media, ranging from film to art from different eras in history.
            Both members of this project, <span style={{color: "#f40"}}>Daniel</span> and <span style={{color: "#f40"}}>David</span>, are Computer Science majors at Northeastern, and wished to create something relating to both their major, and this class, and thus, this website was developed.
          </Text>
        </Box>
      </Flex>
      </>
  );
};

export default About;
