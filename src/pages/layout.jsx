import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import "../styles/main_style.css";
import FooterComponent from "../components/FooterComponenet.jsx";

const Layout = () => {
  return (
    <div className="app-layout">
      <NavBar />

      <main className="app-main">
        <Outlet />
      </main>

      <FooterComponent></FooterComponent>
    </div>
  );
};


export default Layout;