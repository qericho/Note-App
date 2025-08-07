import { MdLightbulbOutline } from "react-icons/md";
import { IoArchiveOutline } from "react-icons/io5";
import { useContext } from "react";
import SidebarContext from "../Context/SidebarContext";

const SideBar = () => {
  const { open } = useContext(SidebarContext);
  return (
    <div
      className={`${open ? "w-[200px]" : "w-full"} h-screen border-r-gray-300 border-r py-10 px-5`}
    >
      <ul className="flex flex-col gap-y-10">
        <li
          className={`flex items-center justify-between ${open ? "w-[100px]" : "w-full"} hover:text-blue-500 cursor-pointer`}
        >
          <span className="text-2xl">
            <MdLightbulbOutline />
          </span>
          {open && <span className="text-21px font-semibold">Notes</span>}
        </li>
        <li
          className={`flex items-center justify-between ${open ? "w-[100px]" : "w-full"} hover:text-blue-500 cursor-pointer`}
        >
          <span className="text-2xl">
            <IoArchiveOutline />
          </span>
          {open && <span className="text-21px font-semibold">Archive</span>}
        </li>
        <li
          className={`flex items-center justify-between ${open ? "w-[100px]" : "w-full"} hover:text-blue-500 cursor-pointer`}
        >
          <span className="text-2xl">
            <IoArchiveOutline />
          </span>
          {open && <span className="text-21px font-semibold">Trash</span>}
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
