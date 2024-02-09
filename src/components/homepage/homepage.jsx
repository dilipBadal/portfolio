import React, { useState, useEffect } from "react";
import Typewriter from "../typing";
import { Box } from "@chakra-ui/react";

function Homepage() {
  return (
    <Box
      bg={"primary"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      color={"#fff"}
    >
      <Box><Typewriter text="Hi, I am Dilip and I'm a Software Developer."  delay={100} /></Box>
    </Box>
  );
}

export default Homepage;
