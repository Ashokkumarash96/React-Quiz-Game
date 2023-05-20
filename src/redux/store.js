// import the createStore function from redux
import { createStore } from "redux";
// import the reducer function from ./reducer
import reducer from "./reducer";

// create and export a redux store using the reducer function
export default createStore(reducer);
