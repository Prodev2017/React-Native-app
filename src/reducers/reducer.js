import {combineReducers} from "redux";
import navigationReducer from './navigation';
import sessionReducer, {RESET_STATE} from './session';
import testReducer from "./test";

const reducers = {
    // @NOTE: By convention, the navigation state must live in a subtree called
     //`navigationState`
    navigationState: navigationReducer,

    session: sessionReducer,

    test: testReducer
};


const rootReducer = combineReducers(reducers);

export default rootReducer;
