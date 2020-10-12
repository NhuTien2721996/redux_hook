import {fork, put, take, delay} from 'redux-saga/effects';
import * as productTypes from './../constants/ActionTypes'
import {showLoading, hideLoading} from "../actions/ui";

function* rootSaga() {
    yield fork(getAllData);
    yield fork(editData);
    yield fork(updateData);
    yield fork(deleteData);
    yield fork(addData);
}

function* getAllData() {
    while (true) {
        yield take(productTypes.GET_ALL);
        yield put(showLoading());
        yield delay(500);
        yield put(hideLoading());
    }
}

function* editData() {
    while (true) {
        yield take(productTypes.EDIT_PRODUCT);
        yield put(showLoading());
        yield delay(500);
        yield put(hideLoading());
    }
}

function* updateData() {
    while (true) {
        yield take(productTypes.UPDATE_PRODUCT);
        yield put(showLoading());
        yield delay(500);
        yield put(hideLoading());
    }
}

function* deleteData() {
    while (true) {
        yield take(productTypes.DELETE_PRODUCT);
        yield put(showLoading());
        yield delay(500);
        yield put(hideLoading());
    }
}

function* addData() {
    while (true) {
        yield take(productTypes.ADD_PRODUCT);
        yield put(showLoading());
        yield delay(500);
        yield put(hideLoading());
    }
}

export default rootSaga;
