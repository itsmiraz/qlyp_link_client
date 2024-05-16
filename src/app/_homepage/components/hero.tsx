"use client";

import React, { useState } from "react";
import ShortenUrlForm from "./shortenUrlForm";
import { ShowShortURlModal } from "./shorShortUrlModal";

// import { CopyIcon } from "@radix-ui/react-icons"

const Hero = () => {
  const [Modal, setModal] = useState(false);
  const [Link, setLink] = useState("");
  console.log(Modal);
  console.log(Link);
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
      <ShortenUrlForm setModal={setModal} setshortLink={setLink} />
      {Modal && (
        <ShowShortURlModal setModal={setModal} open={Modal} link={Link} />
      )}
    </div>
  );
};

export default Hero;
