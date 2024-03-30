const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "im heading h1"),
    React.createElement("h2", {}, "im heading h2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
