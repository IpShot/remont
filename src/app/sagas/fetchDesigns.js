import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDesignsSuccess, fetchDesignsError } from 'app/actions/designs';
import { FETCH_DESIGNS } from 'app/constants';


function* fetchDesigns(action) {
  try {
    yield call(delay, 1000);
    const designs = [1, 2, 3];
    yield put(fetchDesignsSuccess(designs));
  } catch (e) {
    yield put(fetchDesignsError(e.message));
  }
}

function* watchFetchDesigns() {
  yield* takeLatest(FETCH_DESIGNS, fetchDesigns);
}

export default watchFetchDesigns;
