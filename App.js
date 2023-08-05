let heading = React.createElement("h1", {}, "Heading1");
let heading2 = React.createElement("h2", {}, "Heading2");
let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [heading, heading2]),
  React.createElement("div", { id: "child2" }, [heading, heading2])
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);