import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = <h1>Namaste react from JSX 🚀🚀</h1>;

// React functional components

const Title = () => (
  <div id="title">
    <h2>this is title inside the HeadingComponent</h2>
  </div>
);

const variable = 100;
const HeadingComponent = () => (
  <div id="container">
    <h1>Namaste react {variable} functional components</h1>
    <Title />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
