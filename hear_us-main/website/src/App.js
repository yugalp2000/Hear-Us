import { Switch, Route } from "react-router-dom";
import { Box, Heading, Flex, Image, Spacer } from "@chakra-ui/react";
import logo from "./assets/log.png";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/WhyUs";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

function App() {
  return (
    <Box overflowX="hidden">
      <NavBar />
      <Hero />
      {/* <AboutUs />
      <WhyUs /> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <FAQ />
      <Footer />
    </Box>
  );
}

export default App;
