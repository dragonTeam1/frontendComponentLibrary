import { connect } from "react-redux";
import { ActionType } from "../reduce/defind";
// import {TESTACTIONTYPE} from "../reduce/action_type";
const TESTACTIONTYPE = "testactiontype";

const mapStateToProps = (state: ActionType) => {
    return {
        todos: state.data,
        // ...
    };
};

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return () => ({
        testFun: () => {
            dispatch({
                type: TESTACTIONTYPE,
                data: "",
            });
        },
        // ...
    });
};

export default (example) => connect(mapStateToProps, mapDispatchToProps)(example);
