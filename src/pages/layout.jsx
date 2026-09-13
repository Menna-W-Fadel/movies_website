import NavBar from "../components/NavBar";
import { Outlet, useLocation } from "react-router";
import FooterComponent from "../components/FooterComponenet.jsx";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const location = useLocation();
  const [animClass, setAnimClass] = useState("animate-fade-in");

  useEffect(() => {
    setAnimClass("animate-fade-in");
    const timer = setTimeout(() => setAnimClass(""), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="app-layout">
      <NavBar />
      <main className={`app-main ${animClass}`}>
        <Outlet />
      </main>
      <FooterComponent />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Layout;
