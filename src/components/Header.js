import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  ///redux toolkit subscribing to the store
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between  bg-pink-100 shadow-lg  h-32 w-[100%]">
      <div className="logo-container">
        <img className="w-48  h-32" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">OnlineStatus{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/About">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/Cart">Cart--{cart.length}</Link>
          </li>{" "}
          <button
            className="loginBtn"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="px-4">
            <Link to="/">{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
