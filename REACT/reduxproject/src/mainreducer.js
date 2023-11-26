import { combineReducers } from "redux";

import Userlist from "./userreducer";
import Productlist from "./productreducer";
import Apilist from "./apireducer";

const Mainreducer = combineReducers({
    Userlist,Productlist,Apilist
})

export default Mainreducer;