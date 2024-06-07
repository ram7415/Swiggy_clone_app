import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import myimg from "../components/download.png";
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
      <div className="container mx-auto flex items-center justify-between py-1 px-6">
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
          } sm:flex sm:items-center sm:space-x-4`}
        >
          <Link to="/" className="block px-4 text-xl  py-2 hover:text-2xl mx-1">
            <IoHomeOutline />
          </Link>
          <Link
            to="/About"
            className="block px-4 text-xl  py-2 hover:text-2xl mx-1"
          >
            <TbHelp />
          </Link>
          <Link
            to="/Contact"
            className="block px-4 text-xl  py-2 hover:text-2xl mx-1"
          >
            <TiContacts />
          </Link>
          <Link
            to="/Grocery"
            className="block px-4 text-xl  py-2 hover:text-2xl mx-1"
          >
            <GiShop />
          </Link>
          <Link
            to="/Cart"
            className="block px-4 text-xl  py-2 hover:text-2xl mx-1"
          >
            <span>🛒({cart.length})</span>
          </Link>

          <Link to="/" className="blockpx-4  text-xl  py-2 hover:text-2xl mx-0">
            {loggedInUser}
          </Link>
          <span className="hidden sm:block text-white ">
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </span>
          <button
            className="block px-4 py-2 text-[#efefef] rounded hover:bg-gray-200  bg-orange-400 "
            onClick={() => {
              setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
            }}
          >
            {loginBtn}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
