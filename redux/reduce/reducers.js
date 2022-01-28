export default (function (state, action) {
    switch (action.type) {
        case "test":
            return {
                type: "test",
                data: "test_info",
            };
        default:
            return state;
    }
});
//# sourceMappingURL=reducers.js.map