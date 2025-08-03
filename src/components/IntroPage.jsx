import React from "react";
import Header from "./Header.jsx";
import Intro from "./Intro.jsx";

const IntroPage = ({ onStart }) => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-700 via-purple-900 to-gray-900">
    <Header />
    <Intro onStart={onStart} />
  </div>
);

export default IntroPage;
