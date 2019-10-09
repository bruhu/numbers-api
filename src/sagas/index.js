// import saga
import { takeLatest, call, put } from "redux-saga/effects";
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../actions/actionTypes";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchData(num) {
  return axios({
    method: "get",
    url: `https://numbers-api-proxy.dci-fbw121.now.sh/?number=${num}`
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  console.log(action.number);
  try {
    const response = yield call(fetchData, action.number);
    const data = response.data;
    console.log(data);

    // dispatch a success action to the store with the new data
    yield put({ type: API_CALL_SUCCESS, data });
  } catch (error) {
    // dispatch a failure action to the store with the error}
    yield put({ type: API_CALL_FAILURE, error });
  }
}
