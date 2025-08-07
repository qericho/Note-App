import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

const Layout = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-20 z-20 bg-white shadow">
        <Navbar />
      </div>

      <div className="fixed top-20 left-0 h-[calc(100vh-5rem)] z-10">
        <SideBar />
      </div>

      <div className="pt-25 w-[200px] md:w-[300px] mx-auto transition-all duration-300">
        <AddTask />
      </div>
    </div>
  );
};

export default Layout;
