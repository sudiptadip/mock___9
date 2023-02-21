import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      h={"80px"}
      justifyContent={"space-evenly"}
      fontSize={"20px"}
      bg={"whatsapp.500"}
      alignItems={'center'}
    >
      <Box>
        <Link to={"/"}> Home</Link>
      </Box>
      <Box>
        <Link to={"/dashbord"}>Dashbord</Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
