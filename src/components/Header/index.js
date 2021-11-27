import React from "react";
import { Flex, Box, Link, Spacer, Center, Heading } from "@chakra-ui/react";
import {Link as ReachLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
      <>
        <Flex p={"5em"}>
          <Box ms={"5em"}>
            <Link as={ ReachLink } to="/art" onClick="window.location.reload();" fontWeight="bold" fontSize="md" pb={1} _hover={{color: "#f40"}} borderBottomColor={ window.location.pathname === "/art" ? "#f40" :null} borderBottomWidth={ window.location.pathname === "/art" ? "0.3em" :null} color={ window.location.pathname === "/art" ? "#f40" :null}>ART</Link>
            <Link as={ ReachLink } to="/about" onClick="window.location.reload();" fontWeight="bold" fontSize="md" ms={10} pb={1} _hover={{color: "#f40"}} borderBottomColor={ window.location.pathname === "/about" ? "#f40" :null} borderBottomWidth={ window.location.pathname === "/about" ? "0.3em" :null} color={ window.location.pathname === "/about" ? "#f40" :null}>ABOUT</Link>
          </Box>
          <Spacer />
          <Center mt="-0.75em">
            <Heading _hover={{color: "#f40", cursor: "pointer"}} onClick={handleClick}>apocalypticism</Heading>
          </Center>
          <Spacer />
          <Box me={"5em"}>
            <Link as={ ReachLink } to="/daniel" onClick="window.location.reload();" fontWeight="bold" fontSize="md" pb={1} _hover={{color: "#f40"}} borderBottomColor={ window.location.pathname === "/daniel" ? "#f40" :null} borderBottomWidth={ window.location.pathname === "/daniel" ? "0.3em" :null} color={ window.location.pathname === "/daniel" ? "#f40" :null}>DANIEL KIM</Link>
            <Link as={ ReachLink } to="/david" onClick="window.location.reload();" fontWeight="bold" fontSize="md" ms={10} pb={1} _hover={{color: "#f40"}} borderBottomColor={ window.location.pathname === "/david" ? "#f40" :null} borderBottomWidth={ window.location.pathname === "/david" ? "0.3em" :null} color={ window.location.pathname === "/david" ? "#f40" :null}>DAVID HUH</Link>
          </Box>
        </Flex>
      </>
  );
};

export default Header;
