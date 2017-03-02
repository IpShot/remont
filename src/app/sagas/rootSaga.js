import { fork } from 'redux-saga/effects';
import watchFetchDesigns from './fetchDesigns';


export default function* rootSaga() {
  yield fork(watchFetchDesigns);
}
