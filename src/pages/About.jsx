import React,{useEffect, useContext} from "react";
import HeroSection from "../components/HeroSection";
import { HeroContext } from "../context/HeroContext";
const About = () => {
  const {AboutPage}= useContext(HeroContext)

  useEffect(() => {
    AboutPage()
  }, [])
  
  return (
    <>
        <HeroSection />
    </>
  );
};

export default About;
