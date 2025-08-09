import { useContext } from "react";
import { ThemeContext } from "../context/ThemeCotext";

const TaskContainer = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-screen border
         ${dark ? "bg-none border-white/80" : "border-gray-300"}`}
    ></div>
  );
};

export default TaskContainer;
