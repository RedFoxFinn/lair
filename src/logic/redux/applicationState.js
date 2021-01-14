
const createInitialState = () => {
    return {
        status: '[DEV]'
    };
};

const applicationState = (state = createInitialState(), action) => {
    switch (action.type) {
        default: return state;
    }
};

export default applicationState;