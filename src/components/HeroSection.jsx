import React, { useContext } from "react";
import { HeroContext } from "../context/HeroContext";

const HeroSection = () => {
  const { name, designation } = useContext(HeroContext);
  return (
    <>
      <div className="content">
        <h1> {name}</h1>
        <p>{designation}</p>
      </div>
    </>
  );
};

export default HeroSection;
