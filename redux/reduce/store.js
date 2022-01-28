import { createStore } from "redux";
import reducers from "./reducers";
var initState = {
    type: "test",
    data: "test_info",
};
export default createStore(reducers, initState);
//# sourceMappingURL=store.js.map