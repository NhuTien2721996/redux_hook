import {fork, put, take, delay, select, takeLatest, call} from 'redux-saga/effects';
import * as productTypes from './../constants/ActionTypes'
import {showLoading, hideLoading} from "../actions/ui";
import {filterProductSuccess, getAll, addProduct, editProduct, updateProduct} from "../actions/index";
import callApi from "../utils/ApiCaller";


function* rootSaga() {
    yield fork(getAllData);
    yield fork(editData);
    yield fork(updateData);
    yield fork(deleteData);
    yield fork(addData);
    yield takeLatest(productTypes.FILTER_PRODUCT, filterData);
}

function* getAllData() {
    while (true) {
        yield take(productTypes.GET_ALL);
        const res = yield call(callApi, '/products', 'GET', null);
        yield put(showLoading());
        yield delay(500);
        yield put(hideLoading());
        yield put(getAll(res.data));
    }
}

function* editData() {
    while (true) {
        const id = yield take(productTypes.EDIT_PRODUCT);
        const res = yield call(callApi, `/products/${id.product}`, 'GET', null);
        yield put(showLoading());
        yield delay(500);
        yield put(hideLoading());
        yield put(editProduct(res.data));
    }
}

function* updateData() {
    while (true) {
        const product = yield take(productTypes.UPDATE_PRODUCT);
        const res = yield call(callApi, `/products/${product.product.id}`, 'PUT', product.product);
        yield put(showLoading());
        yield delay(500);
        yield put(hideLoading());
        yield put(updateProduct(res.data));
    }
}

function* deleteData() {
    while (true) {
        const product = yield take(productTypes.DELETE_PRODUCT);
        yield put(showLoading());
        yield delay(500);
        yield call(callApi, `/products/${product.id}`, 'DELETE', null);
        yield put(hideLoading());
    }
}

function* addData() {
    while (true) {
        const product = yield take(productTypes.ADD_PRODUCT);
        const res = yield call(callApi, '/products', 'POST', product.product);
        yield put(showLoading());
        yield delay(500);
        yield put(hideLoading());
        yield put(addProduct(res.data))
    }
}

function* filterData({keyword}) {
    yield delay(500);
    const list = yield select(state => state.products);
    const filteredProduct = list.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));
    yield put(filterProductSuccess(filteredProduct))
}

export default rootSaga;
