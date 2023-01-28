import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  const socialMediaIcons = [<FaLinkedinIn />, <FaGithub />];
  return (
    <div className="flex flex-col justify-end items-center p-4">
      {socialMediaIcons.map((icon, index) => (
        <div
          key={index}
          className={`w-10 w- h-10 rounded-full bg-white my-1 mx-0 border border-solid border-lightGray flex justify-center items-center
            hover:bg-secondary hover:border-secondary
            transition-all ease-in-out duration-300
            2xl:w-20 2xl:h-20 2xl:m-2`}
        >
          {React.cloneElement(icon, {
            className:
              "fill-gray w-4 h-4 hover:w-5 hover:h-5 hover:fill-white 2xl:w-8 2xl:h-8 transition-all ease-in-out duration-300",
          })}
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
