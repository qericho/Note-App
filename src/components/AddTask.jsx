import { useState, useRef, useContext } from "react";
import { IoIosAdd } from "react-icons/io";
import { ThemeContext } from "../context/ThemeCotext";

const AddTask = () => {
  const { dark } = useContext(ThemeContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const wrapperRef = useRef(null);

  const handleClickOutside = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setIsExpanded(false);
    }
  };

  useState(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="shadow-sm flex gap-2 items-start border border-gray-300 rounded p-2 transition-all duration-300"
      onClick={() => setIsExpanded(true)}
    >
      <textarea
        rows={isExpanded ? 4 : 1}
        className={`${dark ? "placeholder-white" : "placeholder-black/50"} w-full resize-none outline-none text-[14px]`}
        placeholder="Take a note..."
      />
      {isExpanded && (
        <button className="text-xl text-gray-500 hover:text-blue-500 cursor-pointer">
          <IoIosAdd />
        </button>
      )}
    </div>
  );
};

export default AddTask;
