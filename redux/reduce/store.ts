import { createStore } from "redux";
import { ActionType } from "./defind";
import reducers from "./reducers";

const initState: ActionType = {
    type: "test",
    data: "test_info",
};

export default createStore(reducers as never, initState);
