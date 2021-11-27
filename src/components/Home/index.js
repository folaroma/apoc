import React from "react";
import { Flex, Box, Link } from "@chakra-ui/react";

const Home = () => {
  return (
      <>
      <Flex p={"5em"}>
        <Box ms={"5em"}>
          <Link fontSize="7xl" fontWeight="bold">19th Century</Link> <br />
          <Link fontSize="7xl" fontWeight="bold">Modern</Link>
        </Box>
      </Flex>

      </>
  );
};

export default Home;
