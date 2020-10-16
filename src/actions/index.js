import * as types from './../constants/ActionTypes';

export const getAll = (products) => {
    return {
        type: types.GET_ALL,
        products
    }
};

export const addProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
};

export const deleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
};


export const editProduct = (product) => {
    return {
        type: types.EDIT_PRODUCT,
        product
    }
};


export const updateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
};

export const clearForm = (product) => {
    return {
        type: types.CLEAR_PRODUCT,
        product
    }
};

export const filterProduct = (keyword) => {
    return {
        type: types.FILTER_PRODUCT,
        keyword
    }
};

export const filterProductSuccess = (data) => {
    return {
        type: types.FILTER_PRODUCT_SUCCESS,
        data
    }
};


