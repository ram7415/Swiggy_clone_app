import { useEffect, useState } from "react";
import { Resid_URL } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(Resid_URL + resId);
    const json = await data.json();
    console.log("menu", json);
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
