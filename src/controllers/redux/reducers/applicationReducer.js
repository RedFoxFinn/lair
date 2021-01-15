
const createInitialState = () => {
    return {
        status: '[DEV]'
    };
};

const applicationReducer = (state = createInitialState(), action) => {
    switch (action.type) {
        default: return state;
    }
};

export default applicationReducer;