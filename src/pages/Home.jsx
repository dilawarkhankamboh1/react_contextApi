import React,{useEffect , useContext} from "react";
import HeroSection from "../components/HeroSection";
import { HeroContext } from "../context/HeroContext";

const Home = () => {
  const {HomePage}= useContext(HeroContext)

  useEffect(() => {
    HomePage()
  }, [])
  
  return (
    <>
      <HeroSection />
    </>
  );
};

export default Home;
