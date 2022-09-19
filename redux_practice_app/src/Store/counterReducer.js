const initialstate = {
    count: 0
}
function CounterReducer(state = initialstate, action) {
    if (action.type === 'INCREMENT') {
        return { ...state, count: state.count + 1 }
    }
    if (action.type === 'DECREMENT') {
        return { ...state, count: state.count - 1 }
    }
    if (action.type === "RESET") {
        return { ...state, count: initialstate.count }
    }
    return state
}

export default CounterReducer