import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Namaste React"),
    React.createElement("h1", {}, "I am h1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I am h3"),
    React.createElement("h4", {}, "I am h4"),
  ]),
]);
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(parent);
