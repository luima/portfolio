import { FC } from "react";

import menus from "@constants/menus";

const NavigationDots: FC<{ active: string }> = ({ active }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      {menus.map((item) => (
        <a
          className={`${
            active === item ? "bg-secondary" : "bg-lightGray"
          } w-3 h-3 rounded-full  m-2 transition-[background-color] ease-in-out duration-200 hover:bg-secondary 2xl:w-5 2xl:h-5`}
          href={`#${item}`}
          key={`dot-${item}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
