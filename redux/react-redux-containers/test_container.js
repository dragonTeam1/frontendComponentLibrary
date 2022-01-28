import { connect } from "react-redux";
import { TESTACTIONTYPE } from "../reduce/action_type";
var mapStateToProps = function (state) {
    return {
        todos: state.data,
        // ...
    };
};
var mapDispatchToProps = function (dispatch) {
    return function () { return ({
        testFun: function () {
            dispatch({
                type: TESTACTIONTYPE,
                data: "",
            });
        },
        // ...
    }); };
};
export default (function (example) {
    return connect(mapStateToProps, mapDispatchToProps)(example);
});
//# sourceMappingURL=test_container.js.map