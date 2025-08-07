import { useState } from "react";
import SidebarContext from "./SidebarContext";

const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <SidebarContext.Provider value={{ open, handleOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
