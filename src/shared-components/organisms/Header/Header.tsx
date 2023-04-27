import type { FC } from "react";
import type { HeaderProps } from "./Header.types";

import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoReorderThreeOutline } from "react-icons/io5";

const Header: FC<HeaderProps> = (props) => {
  return (
    <header
      className="fixed left-0 top-0 z-10 flex w-full flex-row items-center justify-between border-b border-gray-200 bg-white px-4 py-2"
      {...props}
    >
      <div className="div">
        <button className="">
          <IoReorderThreeOutline className="cursor-pointer text-4xl text-gray-500"></IoReorderThreeOutline>
        </button>
      </div>
      <div className="hidden text-3xl font-bold">SnapBlog</div>
      <div className="flex items-center space-x-4">
        <button className="transtion rounded-full p-2 hover:bg-gray-100 hover:text-gray-800">
          <BsBell className="cursor-pointer text-2xl text-gray-500" />
        </button>
        <div>
          <div className="h-8 w-8 rounded-full bg-gray-200"></div>
        </div>
        <div>
          <button className="flex items-center space-x-3 rounded border border-gray-400 px-4 py-2.5 transition hover:border-gray-800">
            <div>Write</div>
            <div>
              <FiEdit />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
