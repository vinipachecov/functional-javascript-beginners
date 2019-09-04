import initModel from "./model";
import update from "./udpate";
import view from "./view";
import app from "./app";

const node = document.getElementById("app");

app(initModel, update, view, node);

// import h from "hyperscript";
// import hh from "hyperscript-helpers";

// const { div, button } = hh(h);
// const initModel = 0;

// function view(model) {
//   return div([div(`Count: ${model}`), button("+"), button("-")]);
// }

// const rootNode = document.getElementById("app");
// rootNode.appendChild(view(initModel));
