import { FaBars } from "react-icons/fa6";
import { CgDarkMode } from "react-icons/cg";
import { useContext } from "react";
import SidebarContext from "../Context/SidebarContext";

const Navbar = () => {
  const { handleOpen } = useContext(SidebarContext);
  return (
    <nav>
      <div className="border-b-gray-300 border-b h-20 w-full flex items-center justify-between px-2">
        <div className="flex items-center gap-x-4">
          <span
            onClick={() => handleOpen()}
            className="text-2xl cursor-pointer"
          >
            <FaBars />
          </span>
          <div>
            <h1 className="text-2xl">I NOTES</h1>
          </div>
        </div>
        <div>
          <span className="text-3xl cursor-pointer">
            <CgDarkMode />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
