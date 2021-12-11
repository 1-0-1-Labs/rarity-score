import React from "react";
import { FiCoffee } from "react-icons/fi";
import { IoLogoTwitter, IoIosRocket, IoIosHammer } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="flex flex-col border-t-1 border w-full p-4 mt-4 items-center text-xs justify-center">
      <a
        className="flex items-center mb-4 text-gray-600 hover:text-gray-900"
        href="https://twitter.com/LaFamiglia101"
        target="_blank"
      >
        <span className="text-lg mr-1">
          <IoLogoTwitter />
        </span>
        Twitter
      </a>
      <a
        className="flex items-center mb-4 text-gray-600 hover:text-gray-900"
        href="https://mint.lafamiglia.io/"
        target="_blank"
      >
        <span className="text-lg mr-1">
          <IoIosHammer />
        </span>
        Mint Website
      </a>
      <a
        className="flex items-center mb-4 text-gray-600 hover:text-gray-900"
        href="https://linktr.ee/lafamiglia101"
        target="_blank"
      >
        <span className="text-lg mr-1">
          <IoIosRocket />
        </span>
        La Famiglia Linktree
      </a>
    </div>
  );
};
