import React from "react";
import { Flex, Box, Link } from "@chakra-ui/react";
import {Link as ReachLink } from "react-router-dom";

const Home = () => {
  return (
      <>
      <Flex p={"5em"}>
        <Box ms={"5em"} mt={"3em"}>
          <Link as={ ReachLink } to="/film" onClick="window.location.reload();" _hover={{color: "#f40"}} fontSize="8xl" fontWeight="bold">Film</Link> <br />
          <Link as={ ReachLink } to="/contemporary" onClick="window.location.reload();" _hover={{color: "#f40"}} fontSize="8xl" fontWeight="bold">Contemporary</Link> <br />
          <Link as={ ReachLink } to="/19century" onClick="window.location.reload();" _hover={{color: "#f40"}} fontSize="8xl" fontWeight="bold">19th Century</Link> <br />
          <Link as={ ReachLink } to="/16century" onClick="window.location.reload();" _hover={{color: "#f40"}} fontSize="8xl" fontWeight="bold">16th Century</Link> <br />
        </Box>
      </Flex>

      </>
  );
};

export default Home;
