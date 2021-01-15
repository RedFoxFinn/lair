import {takeEvery, fork} from 'redux-saga/effects';
import * as actions from '../actions/testModuleActions';

function* watchIncrementTester() {
  yield takeEvery(actions.Types.INCREMENT_TESTER, actions.incrementTester);
}

function* watchDecrementTester() {
  yield takeEvery(actions.Types.DECREMENT_TESTER, actions.decrementTester);
}

function* watchZeroTester() {
  yield takeEvery(actions.Types.ZERO_TESTER, actions.zeroTester);
}

const testerSagas = [
  fork(watchIncrementTester),
  fork(watchDecrementTester),
  fork(watchZeroTester)
];

export default testerSagas;