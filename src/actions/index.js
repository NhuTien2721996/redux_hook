import * as types from './../constants/actionTypes';
import callApi from "../utils/apiCaller";

export const getAllRequest=()=>{
  return (dispatch)=>{
      return callApi('products','GET',null).then(res=>{
          dispatch(getAll(res.data))
      })
  }
};

export const getAll=(products)=>{
    return {
        type:types.GET_ALL,
        products
    }
};

export const addProductRequest=(product)=>{
    return (dispatch)=>{
        return callApi('products','POST',product).then(res=>{
            dispatch(addProduct(res.data))
        })
    }
};

export const addProduct=(product)=>{
    return {
        type:types.ADD_PRODUCT,
        product
    }
};

export const deleteProductRequest=(id)=>{
    return (dispatch)=>{
        return callApi(`products/${id}`,'DELETE',null).then(res=>{
            dispatch(deleteProduct(res.data.id))
        })
    }
};

export const deleteProduct=(id)=>{
    return {
        type:types.DELETE_PRODUCT,
        id
    }
};

export const editProductRequest=(id)=>{
    return (dispatch)=>{
        return callApi(`products/${id}`,'GET',).then(res=>{
            dispatch(editProduct(res.data))
        })
    }
};

export const editProduct=(product)=>{
    return {
        type:types.EDIT_PRODUCT,
        product
    }
};

export const updateProductRequest=(product)=>{
    return (dispatch)=>{
        return callApi(`products/${product.id}`,'PUT',product).then(res=>{
            dispatch(updateProduct(res.data))
        })
    }
};

export const updateProduct=(product)=>{
    return {
        type:types.UPDATE_PRODUCT,
        product
    }
};

export const clearForm=(product)=>{
    return {
        type:types.CLEAR_FORM,
        product
    }
};
