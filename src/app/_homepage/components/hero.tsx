import React from "react";

const Hero = () => {
  return (
    <div className="py-20">
      <h1 className="text-5xl  font-bold text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Shorten your Loooong URL
        </span>
      </h1>
      <p className="text-center py-4">
        Linkly is an efficient and easy-to-use URL shortening service that{" "}
        <br />
        streamlines your online experience.
      </p>
    </div>
  );
};

export default Hero;
