import * as types from './../constants/ActionTypes';

let initialState = {
    id: '',
    name: '',
    price: '',
    branch:'Hà Nội',
    status: false,
    date:""
};
const ProductEditing = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_PRODUCT:
            state = action.product;
            return state;
        case types.CLEAR_PRODUCT:
            state = {
                id: "",
                name: "",
                price: "",
                branch:"Hà Nội",
                status: false,
                date:""
            };
            return state;

        default :
            return state;
    }
};

export default ProductEditing;
