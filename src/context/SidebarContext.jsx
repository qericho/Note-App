import { useState } from "react";
import { createContext } from "react";

export const SidebarContext = createContext();

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
