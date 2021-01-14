
const createInitialState = () => {
    return {
        value: 0
    };
};

const testModuleState = (state = createInitialState(), action) => {
    switch (action.type) {
        case 'INCREMENT': return {...state, value: state.value += 1};
        case 'DECREMENT': return {...state, value: state.value -= 1};
        case 'ZERO': return {...state, value: 0};
        default: return state;
    }
};

export default testModuleState;