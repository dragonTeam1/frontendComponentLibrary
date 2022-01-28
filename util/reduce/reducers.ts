import { ActionType } from "./defind";

export default (state: ActionType, action: ActionType) => {
    switch (action.type) {
        case "test":
            return {
                type: "test",
                data: "test_info",
            };
        default:
            return state;
    }
};
