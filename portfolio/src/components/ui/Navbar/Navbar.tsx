import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import images from "@/constants/images";
import { FC, useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const menus = ["home", "about", "work", "skills", "testimonials", "contact"];

  return (
    <nav className="w-full fixed z-[2] flex justify-between items-center px-4 py-8 bg-white bg-opacity-25 backdrop-blur-sm border border-white border-opacity-25">
      <div className="flex justify-start items-center">
        <img className="w-[90px] h-[20px]" src={images.logo} alt="logo" />
      </div>
      <ul className="max-[900px]:hidden flex-1 flex justify-center items-center list-none">
        <MenuList menus={menus} onClick={() => setToggle(false)} />
      </ul>

      <div className="min-[900px]:hidden w-[35px] h-[35px] rounded-full relative flex justify-center items-center bg-secondary">
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

const MenuList: FC<{
  menus: string[];
  onClick: () => void;
  small?: boolean;
}> = ({ menus, onClick, small = false }) => {
  return (
    <>
      {menus.map((item) => (
        <li
          className="flex justify-center items-center text-gray leading-6 mx-4 my-0 cursor-pointer flex-col group"
          key={`link-${item}`}
        >
          {small ? (
            <></>
          ) : (
            <div className="w-[5px] h-[5px] bg-transparent rounded-full mb-[5px] group-hover:bg-secondary " />
          )}
          <a
            className="text-gray no-underline uppercase font-medium transition duration-300 ease-in-out hover:text-secondary"
            href={`#${item}`}
            onClick={onClick}
          >
            {item}
          </a>
        </li>
      ))}
    </>
  );
};

export default Navbar;
