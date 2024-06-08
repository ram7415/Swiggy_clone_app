import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import myimg from "../components/download.png";
import profileimg from "../components/profile.png.jpeg";
import { IoHomeOutline } from "react-icons/io5";
import { TbHelp } from "react-icons/tb";
import { TiContacts } from "react-icons/ti";
import { GiShop } from "react-icons/gi";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#ffffff] shadow-lg">
      <div className="container mx-auto flex items-center justify-between  px-6">
        <div className="logo-container">
          <img className="w-32 h-auto" src={myimg} alt="logo" />
        </div>
        <button
          className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        ></button>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:space-x-4 transition-all duration-300 ease-in-out`}
        >
          <Link
            to="/"
            className="block px-4 text-xl py-2 hover:text-2xl mx-1 transition-colors duration-300 ease-in-out"
          >
            <IoHomeOutline />
          </Link>
          <Link
            to="/About"
            className="block px-4 text-xl py-2 hover:text-2xl mx-1 transition-colors duration-300 ease-in-out"
          >
            <TbHelp />
          </Link>
          <Link
            to="/Contact"
            className="block px-4 text-xl py-2 hover:text-2xl mx-1 transition-colors duration-300 ease-in-out"
          >
            <TiContacts />
          </Link>
          <Link
            to="/Grocery"
            className="block px-4 text-xl py-2 hover:text-2xl mx-1 transition-colors duration-300 ease-in-out"
          >
            <GiShop />
          </Link>
          <Link
            to="/Cart"
            className="block px-4 text-xl py-2 hover:text-2xl mx-1 transition-colors duration-300 ease-in-out"
          >
            <span>🛒({cart.length})</span>
          </Link>

          <span className="hidden sm:block text-black px-1 transition-colors duration-300 ease-in-out">
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </span>
          <button
            className="block px-4 py-2 text-[#fff7f7] rounded hover:text-black bg-orange-400 transition-colors duration-300 ease-in-out"
            onClick={() => {
              setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
            }}
          >
            {loginBtn}
          </button>
          <Link
            to="/Profile"
            className="block  text-xl pl-4 hover:text-2xl mx-0 transition-colors duration-300 ease-in-out"
          >
            {loggedInUser}
          </Link>

          <Link
            to="/Profile"
            className="block  text-xl px-1 hover:text-2xl mx-0 transition-colors duration-300 ease-in-out"
          >
            <img src={profileimg} className="w-[25px] rounded-xl" alt="" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
