import { FaBars } from "react-icons/fa6";
import { CgDarkMode } from "react-icons/cg";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { ThemeContext } from "../context/ThemeCotext";
const Navbar = () => {
  const { handleOpen } = useContext(SidebarContext);
  const { dark, toggleTheme } = useContext(ThemeContext);
  return (
    <nav>
      <div
        className={`${dark ? "bg-black/50 text-white border-white/80" : "border-b-gray-300"} border-b h-20 w-full flex items-center justify-between px-2`}
      >
        <div className="flex items-center gap-x-4">
          <span onClick={handleOpen} className="text-2xl cursor-pointer">
            <FaBars />
          </span>
          <div>
            <h1 className="text-2xl">I NOTES</h1>
          </div>
        </div>
        <div>
          <span onClick={toggleTheme} className="text-3xl cursor-pointer">
            <CgDarkMode />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
