import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images, menus } from "@constants/index";
import MenuList from "./MenuList";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full fixed z-[2] flex justify-between items-center px-4 py-8 bg-white bg-opacity-25 backdrop-blur-sm border border-white border-opacity-25">
      <div className="flex justify-start items-center">
        <img className="w-[90px] h-[20px]" src={images.logo} alt="logo" />
      </div>
      <ul className="max-[900px]:hidden flex-1 flex-centered list-none">
        <MenuList menus={menus} onClick={() => setToggle(false)} />
      </ul>

      <div className="min-[900px]:hidden w-[35px] h-[35px] rounded-full relative flex-centered bg-secondary">
        <HiMenuAlt4
          className="w-[70%] h-[70%] fill-white cursor-pointer"
          onClick={() => setToggle(true)}
        />

        {toggle ? (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed top-0 bottom-0 right-0 z-[5] p-4 w-[80%] h-screen flex flex-col justify-end items-end bg-[url(../../../assets/bgWhite.png)]  bg-white bg-cover bg-repeat shadow-[0_0_20px_rgba(168,168,168,0.15)]"
          >
            <HiX
              className="w-[35px] h-[35px] mx-2 my-4 fill-secondary cursor-pointer"
              onClick={() => setToggle(false)}
            />
            <ul className=" list-none m-0 p-0 h-full w-full flex flex-col justify-start items-start">
              <MenuList menus={menus} onClick={() => setToggle(false)} />
            </ul>
          </motion.div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
