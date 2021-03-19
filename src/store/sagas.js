import { call, put, takeLatest } from 'redux-saga/effects'
import {
  GET_FACTS_REQUEST,
  getFactsSuccess,
  getFactsFail,
  GET_SINGLE_FACTS_REQUEST,
  getSingleFactsSuccess,
  getSingleFactsFail,
} from './actions'
import { getFactsApi, getSingleFactApi, getRandomFactApi } from '../http/api'

function* getFactsRequest(action) {
  try {
    let data = []
    console.log(action)
    if (action.query === '') data = yield call(getRandomFactApi)
    if (action.query.length > 2) data = yield call(getFactsApi, action.query)
    yield put(getFactsSuccess(data))
  } catch (e) {
    console.log(e.message)
    yield put(getFactsFail())
  }
}

function* getSingleFactsRequest(action) {
  try {
    const data = yield call(getSingleFactApi, action.query)
    yield put(getSingleFactsSuccess(data))
  } catch (e) {
    console.log(e.message)
    yield put(getSingleFactsFail())
  }
}

export default function* mySaga() {
  yield takeLatest(GET_FACTS_REQUEST, getFactsRequest)
  yield takeLatest(GET_SINGLE_FACTS_REQUEST, getSingleFactsRequest)
}
