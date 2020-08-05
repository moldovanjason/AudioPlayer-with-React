//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { View } from "./views/view";

//render your react application
ReactDOM.render(<View />, document.querySelector("#app"));
