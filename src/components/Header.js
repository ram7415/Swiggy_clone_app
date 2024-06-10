import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import myimg from "../components/download.png";
import profileimg from "../components/profile.png.jpeg";
import { IoHomeOutline } from "react-icons/io5";
import { SWIGGY_LOGO_URL } from "../utils/constants";

import { GiShop } from "react-icons/gi";
import { IoIosHelpBuoy } from "react-icons/io";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-lg text-slate-900  ">
      <div className="header flex justify-between items-center bg-white shadow-md ">
        <Link to="/">
          <img src={SWIGGY_LOGO_URL} alt="" className="w-24" />
        </Link>

        <ul className="navlinks flex mx-2 mb-6 mt-2 ">
          <div className="flex items-center hover:text-orange-500">
            <li className="mx-8">
              <Link to="/Search" className="flex items-center">
                <svg
                  class="_1GTCc"
                  viewBox="5 -1 12 25"
                  height="17"
                  width="17"
                  fill="#686b78"
                >
                  <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
                </svg>
                <span className="ml-2">Search</span>
              </Link>
            </li>
          </div>
          <div className="flex items-center hover:text-orange-500">
            <li className="mx-8">
              <Link to="/Contact" className="flex items-center">
                <svg
                  className="_1GTCc"
                  viewBox="6 -1 12 25"
                  height="19"
                  width="19"
                  fill="#686b78"
                >
                  <path d="M21.966903,13.2244898 C22.0156989,12.8231523 22.0408163,12.4145094 22.0408163,12 C22.0408163,11.8357822 22.036874,11.6724851 22.029079,11.5101984 L17.8574333,11.5102041 C17.8707569,11.6717062 17.877551,11.8350597 17.877551,12 C17.877551,12.4199029 17.8335181,12.8295214 17.749818,13.2244898 L21.966903,13.2244898 Z M21.5255943,15.1836735 L16.9414724,15.1836735 C15.8950289,16.8045422 14.0728218,17.877551 12,17.877551 C9.92717823,17.877551 8.1049711,16.8045422 7.05852762,15.1836735 L2.47440565,15.1836735 C3.80564362,19.168549 7.56739481,22.0408163 12,22.0408163 C16.4326052,22.0408163 20.1943564,19.168549 21.5255943,15.1836735 Z M21.7400381,9.55102041 C20.6468384,5.18931674 16.7006382,1.95918367 12,1.95918367 C7.2993618,1.95918367 3.3531616,5.18931674 2.25996187,9.55102041 L6.6553883,9.55102041 C7.58404845,7.5276442 9.62792376,6.12244898 12,6.12244898 C14.3720762,6.12244898 16.4159515,7.5276442 17.3446117,9.55102041 L21.7400381,9.55102041 Z M2.03309705,13.2244898 L6.25018203,13.2244898 C6.16648186,12.8295214 6.12244898,12.4199029 6.12244898,12 C6.12244898,11.8350597 6.1292431,11.6717062 6.14256675,11.5102041 L1.97092075,11.5102041 C1.96312595,11.6724851 1.95918367,11.8357822 1.95918367,12 C1.95918367,12.4145094 1.98430112,12.8231523 2.03309705,13.2244898 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,15.9183673 C14.1640545,15.9183673 15.9183673,14.1640545 15.9183673,12 C15.9183673,9.83594547 14.1640545,8.08163265 12,8.08163265 C9.83594547,8.08163265 8.08163265,9.83594547 8.08163265,12 C8.08163265,14.1640545 9.83594547,15.9183673 12,15.9183673 Z"></path>
                </svg>
                <span className="ml-2">Help</span>
              </Link>
            </li>
          </div>
          <div className="flex items-center hover:text-orange-500">
            <li className="mx-8">
              <Link to="/Grocery" className="flex items-center">
                <span className="ml-2">
                  {" "}
                  <span className="flex">
                    <GiShop className="mt-1" />
                    Grocery
                  </span>
                </span>
              </Link>
            </li>
          </div>

          <div className="flex items-center hover:text-orange-500">
            <li className="mx-8">
              <Link to="Cart" className="flex items-center">
                <span class="_2vS77">
                  🛒<sup className="text-sm">({cart.length})</sup>
                </span>
                <span className="ml-2">Cart</span>
              </Link>
            </li>
          </div>
          <div className="flex items-center hover:text-orange-500">
            <li className="mx-8">
              <div className="flex items-center">
                <span className="ml-2">
                  {" "}
                  {onlineStatus ? "🟢Online" : "🔴 Offline"}
                </span>
              </div>
            </li>
          </div>
          <div className="flex items-center hover:text-orange-500">
            <li className="mx-8 mb-3">
              <span className="ml-2">
                <Link to="/Profile" className="block  px-1 flex">
                  <img
                    src={profileimg}
                    className="w-[25px] mb-1 rounded-xl"
                    alt=""
                  />
                  Profile
                </Link>
              </span>
            </li>
          </div>
        </ul>
      </div>
    </header>
  );
};
export default Header;

/* <nav
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
            <IoIosHelpBuoy />
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
        </nav> */
