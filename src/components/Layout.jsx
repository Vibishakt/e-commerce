import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <TopBar />
      <main className="mt-[40px] md:mt-[65px] p-1 min-h-screen bg-teal-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
