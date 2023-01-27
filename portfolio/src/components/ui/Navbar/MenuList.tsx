import { FC } from "react";

interface MenuListProps {
  menus: string[];
  onClick: () => void;
  small?: boolean;
}

const MenuList: FC<MenuListProps> = ({ menus, onClick, small = false }) => {
  return (
    <>
      {menus.map((item) => (
        <li
          className="flex-centered text-gray leading-6 mx-4 my-0 cursor-pointer flex-col group"
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

export default MenuList;
