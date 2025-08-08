import { MdLightbulbOutline } from "react-icons/md";
import { IoArchiveOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { useContext } from "react";
import SidebarContext from "../Context/SidebarContext";

const SideBar = () => {
  const { open } = useContext(SidebarContext);

  return (
    <div
      className={`${open ? "hidden" : "flex"}  text-white
      w-full bg-gray-500 h-screen border-r-gray-300 border-r py-10 px-5`}
    >
      <ul className="flex flex-col gap-y-10">
        <li className="flex items-center justify-between w-[100px] hover:text-black cursor-pointer">
          <span className="text-2xl">
            <MdLightbulbOutline />
          </span>
          <span className="text-21px font-semibold">Notes</span>
        </li>
        <li className="flex items-center justify-between w-[100px] hover:text-black cursor-pointer">
          <span className="text-2xl">
            <IoArchiveOutline />
          </span>
          <span className="text-21px font-semibold">Archive</span>
        </li>
        <li className="flex items-center justify-between w-[100px] hover:text-black cursor-pointer">
          <span className="text-2xl">
            <IoTrashOutline />
          </span>
          <span className="text-21px font-semibold">Trash</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
