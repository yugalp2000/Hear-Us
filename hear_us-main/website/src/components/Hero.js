import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Background from "../assets/bg1.jpg";

function Hero() {
  return (
    <Box
      w="100vw"
      h="100vh"
      backgroundImage={`url(${Background})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      d="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading size="3xl" color="#000000" textAlign="center">
        Welcome To Hear Us
      </Heading>
      <Heading size="3xl" color="#000000" mt={10}>
        Here To Hear You
      </Heading>
      <Button
        mt={8}
        size="lg"
        borderRadius="100px" 
        color="white"
        bg="#254547"
        _hover={{ bg: "#000000", color: "#f8feff" }}
      >
        Book Now
      </Button>
      <Button
        as="a"
        href="https://play.google.com/store/apps/details?id=me.hearus.app"
        size="lg"
        borderRadius="100px"
        bg="#254547"
        color="white"
        mt={8}
        _hover={{ bg: "#000000", color: "#ffffff" }}
      >
        Download the App Now
      </Button>
    </Box>
  );
}

export default Hero;
