
import {all} from 'redux-saga/effects';
import testerSagas from './testModuleSagas';

export default function* rootSaga() {
  yield all([...testerSagas])
}