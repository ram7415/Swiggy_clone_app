import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import myimg from "../components/download.png";
// const Header = () => {
//   const [loginBtn, setLoginBtn] = useState("Login");
//   const onlineStatus = useOnlineStatus();

//   const { loggedInUser } = useContext(UserContext);

//   ///redux toolkit subscribing to the store
//   const cart = useSelector((store) => store.cart.items);

//   return (
//     <div className="flex justify-between  bg-pink-100 shadow-lg  h-32 w-[100%]">
//       <div className="logo-container">
//         <img className="w-48  h-32" src={myimg} alt="logo" />
//       </div>
//       <div className="flex items-center">
//         <ul className="flex p-4 m-4">
//           <li className="px-4">OnlineStatus{onlineStatus ? "🟢" : "🔴"}</li>
//           <li className="px-4">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="px-4">
//             <Link to="/About">About Us</Link>
//           </li>
//           <li className="px-4">
//             <Link to="/Contact">Contact Us</Link>
//           </li>
//           <li className="px-4">
//             <Link to="/Grocery">Grocery</Link>
//           </li>
//           <li className="px-4">
//             <Link to="/Cart">Cart--{cart.length}</Link>
//           </li>{" "}
//           <button
//             className="loginBtn"
//             onClick={() => {
//               loginBtn === "Login"
//                 ? setLoginBtn("Logout")
//                 : setLoginBtn("Login");
//             }}
//           >
//             {loginBtn}
//           </button>
//           <li className="px-4">
//             <Link to="/">{loggedInUser}</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#FF7D29] shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="logo-container">
          <img className="w-32 h-auto" src={myimg} alt="logo" />
        </div>
        <button
          className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:space-x-4`}
        >
          <span className="hidden sm:block text-white">
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </span>
          <Link
            to="/"
            className="block px-4 py-2 text-white hover:text-gray-200"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="block px-4 py-2 text-white hover:text-gray-200"
          >
            About Us
          </Link>
          <Link
            to="/Contact"
            className="block px-4 py-2 text-white hover:text-gray-200"
          >
            Contact Us
          </Link>
          <Link
            to="/Grocery"
            className="block px-4 py-2 text-white hover:text-gray-200"
          >
            Grocery
          </Link>
          <Link
            to="/Cart"
            className="block px-4 py-2 text-white hover:text-gray-200"
          >
            Cart ({cart.length})
          </Link>
          <button
            className="block px-4 py-2 bg-white text-[#FF7D29] rounded hover:bg-gray-200"
            onClick={() => {
              setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
            }}
          >
            {loginBtn}
          </button>
          <Link
            to="/"
            className="block px-4 py-2 text-white hover:text-gray-200"
          >
            {loggedInUser}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
