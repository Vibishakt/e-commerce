import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <TopBar />
      <main className="mt-[65px] p-1 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
