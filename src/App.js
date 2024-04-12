import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
/*header
.logo
.nav
//body
.container
.card
.*/
const Applayout = () => {
  return (
    <div className="layout">
      <Header />

      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    // element:<Error/>
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
