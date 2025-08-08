import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import TaskContainer from "./components/TaskContainer";

const Layout = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-20 z-20 bg-white shadow">
        <Navbar />
      </div>

      <div className="fixed top-20 left-0 h-[calc(100vh-5rem)] z-10">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="pt-20 pl-0 lg:pl-52 min-h-screen bg-gray-50">
        <div className=" mx-auto px-4 py-6 space-y-6">
          <AddTask />
          <TaskContainer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
