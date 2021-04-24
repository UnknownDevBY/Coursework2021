import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
  FETCH_INITIAL_DATA_REQUESTED,
  FETCH_INITIAL_DATA_SUCCESS,
  FETCH_INITIAL_DATA_FAILURE,
  ADD_DEPOT_CAR_REQUESTED,
  ADD_DEPOT_CAR_SUCCESS,
  ADD_DEPOT_CAR_FAILURE,
  REMOVE_DEPOT_CAR_REQUESTED,
  REMOVE_DEPOT_CAR_SUCCESS,
  REMOVE_DEPOT_CAR_FAILURE
} from './actionTypes';
import {fetchInitialData} from '../services/fetcher';
import {addDepotCarRequest, removeDepotCarRequest} from '../services/requests';


function* fetchInitial(action) {
  try {
    const {data} = yield call(fetchInitialData);
    yield put({type: FETCH_INITIAL_DATA_SUCCESS, payload: data})
  } catch (e) {
    yield put({type: FETCH_INITIAL_DATA_FAILURE})
  }
}

function* addDepotCar(action) {
  try {
    const {data} = yield call(addDepotCarRequest, action.payload);
    yield put({type: ADD_DEPOT_CAR_SUCCESS, payload: data})
  } catch (e) {
    yield put({type: ADD_DEPOT_CAR_FAILURE})
  }
}

function* removeDepotCar(action) {
  try {
    const {data} = yield call(removeDepotCarRequest, action.payload);
    yield put({type: REMOVE_DEPOT_CAR_SUCCESS, payload: data})
  } catch (e) {
    yield put({type: REMOVE_DEPOT_CAR_FAILURE})
  }
}

export default function* mainSaga() {
  yield all([
    takeLatest(FETCH_INITIAL_DATA_REQUESTED, fetchInitial),
    takeLatest(ADD_DEPOT_CAR_REQUESTED, addDepotCar),
    takeLatest(REMOVE_DEPOT_CAR_REQUESTED, removeDepotCar)
  ])
}
