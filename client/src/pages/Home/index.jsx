import React, { useEffect, useState } from "react";
import Main from "./Home";
import Cars from "../Cars";
import Features from "../Features";
import Contact from "../Contacts";

export const Home = () => {
  return (
    <>
      <Main />
      <Cars />
      <Features />
      <Contact />
    </>
  );
};

export default Home;
