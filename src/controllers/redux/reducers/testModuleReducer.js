
import {Types} from '../actions/testModuleActions';

const createInitialState = () => {
    return {
        value: 0
    };
};

const testModuleReducer = (state = createInitialState(), action) => {
    switch (action.type) {
        case Types.INCREMENT_TESTER: return {...state, value: state.value += 1};
        case Types.DECREMENT_TESTER: return {...state, value: state.value -= 1};
        case Types.ZERO_TESTER: return {...state, value: 0};
        default: return state;
    }
};

export default testModuleReducer;