import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import LottieReactAnimation from "./LottieReact";

const HomePage = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800">
      <Fade>
        <h1 className="text-4xl font-bold text-center mb-6">
          Welcome to EquiSports
        </h1>
      </Fade>
      <Zoom>
        <p className="text-lg text-center mb-6">
          Your one-stop shop for all sports equipment needs.
        </p>
      </Zoom>
      <LottieReactAnimation />
    </div>
  );
};

export default HomePage;
