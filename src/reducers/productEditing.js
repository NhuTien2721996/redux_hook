import * as types from './../constants/actionTypes'


const initialState = {
    id: "",
    name: "",
    price: "",
    status: false
};
let productEditing = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_PRODUCT:
            state = action.product;
            return state;
        case types.CLEAR_FORM:
            state = {
                id: "",
                name: "",
                price: "",
                status: false
            };
            return state;

        default:
            return state
    }
};

export default productEditing;
