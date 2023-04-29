import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="bg-VeryLightGray dark:bg-secondary min-h-screen">
      <Navbar />
      <Outlet />
      <div className="attribution dark:text-white">
        Challenge by &nbsp;
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Muhammed Afrar</a>.
      </div>
    </div>
  );
};

export default Layout;
