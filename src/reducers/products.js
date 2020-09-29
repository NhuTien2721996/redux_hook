import * as types from './../constants/actionTypes'

function findIndex(id, products) {
    let result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index
        }
    });
    return result
}

const initialState = [];
let products = (state = initialState, action) => {
    let index=-1;
    switch (action.type) {
        case types.GET_ALL:
            state = action.products;
            return state;
        case types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case types.DELETE_PRODUCT:
             index = findIndex(action.id, state);
            state.splice(index, 1);
            return [...state];
        case types.UPDATE_PRODUCT:
             index=findIndex(action.product.id,state);
                state[index]=action.product;
                return [...state];
        default:
            return state
    }
};

export default products;
