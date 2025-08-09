import SidebarProvider from "./SidebarContext";
import ThemeProvider from "./ThemeCotext";

export default function AppProvider({ children }) {
  return (
    <SidebarProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SidebarProvider>
  );
}
