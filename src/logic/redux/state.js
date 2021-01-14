import { combineReducers, createStore, applyMiddleware } from 'redux';

import appState from './applicationState';
import testModuleState from './testModuleState';

const root = combineReducers({
    app: appState,
    tester: testModuleState
});

const state = createStore(root);

export default state;