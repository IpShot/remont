import { call, put, takeLatest } from 'redux-saga/effects';
import { setInit } from 'app/actions/lesson';
import {
  FETCH_DESIGNS,
  FETCH_DESIGNS_SUCCEEDED,
  FETCH_DESIGNS_FAILED,
} from 'app/constants';


function* fetchDesigns(action) {
  try {
    const user = yield call(fakeFetch, action.payload);
    yield put({
      type: FETCH_DESIGNS_SUCCEEDED,
      designs,
    });
  } catch (e) {
    yield put({
      type: FETCH_DESIGNS_FAILED,
      error: e.message,
    });
  }
}

function* watchFetchDesigns() {
  yield* takeLatest(FETCH_DESIGNS, fetchDesigns);
}

export default watchFetchDesigns;
