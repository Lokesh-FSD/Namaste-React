// Creating single div :-

/*
const heading = React.createElement(
  "h1",
  { className: "header" },
  "Hello from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

// ------------------------------------------------------------------------

//Creating nested div :-

/*const parent = React.createElement(
  "div",
  { className: "parent" },
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", {}, "This is h1 tag "),
    React.createElement("h2", {}, "This is h2 tag "),
  ])
); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
*/
// ----------------------------------------------------------------------------

// creating Multiple child div

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h1", {}, "I am h1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I am h3"),
    React.createElement("h4", {}, "I am h4"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
