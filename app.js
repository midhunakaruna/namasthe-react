

const parent=React.createElement("div",{id:"parent"} ,React.createElement("div",{id:"child"},[React.createElement("h1",{},"iam h1 tag"),
    React.createElement("h2",{},"iam h2 tag")]));

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);
console.log(parent);