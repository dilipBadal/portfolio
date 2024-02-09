import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

function Homepage() {
  const [introList, setIntroList] = useState([
    "hi",
    "Hi",
    "Hi I am",
    "Hi I am A",
    "Hi I am a software",
    "Hi I am a Software",
    "Hi I am a Software Developer",
    "Hi I am a Software Developer",
  ]);

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const text = introList[currentIndex];
      setCurrentText((prevText) => prevText + text.charAt(prevText.length));
      if (currentText === text) {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentText("");
          setCurrentIndex((prevIndex) => (prevIndex + 1) % introList.length);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentIndex, introList, currentText]);

  return (
    <Box
      bg={"primary"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      color={"#fff"}
    >
      <Box>{currentText}</Box>
    </Box>
  );
}

export default Homepage;
