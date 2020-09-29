import React, {useEffect, useState} from 'react';
import {addProductRequest, editProductRequest, updateProductRequest,clearForm} from './../../actions/index';
import { useDispatch, useSelector} from 'react-redux';
import {Link,useHistory,useRouteMatch,useParams} from "react-router-dom";

function ProductActionPage() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState(false);
    const productEditing=useSelector((state)=>state.productEditing);
    const dispatch=useDispatch();
    const addProduct=(product)=>dispatch(addProductRequest(product));
    const editProduct=(id)=>dispatch(editProductRequest(id));
    const updateProduct=(product)=>dispatch(updateProductRequest(product));
    const clearFormProduct=(product)=>dispatch(clearForm(product));
    let history=useHistory();
    let match=useRouteMatch("/product/:id/edit");
    let params=useParams();
    function onHandleSubmit(e) {
        e.preventDefault();
        let product = {
            id,
            name,
            price,
            status
        };
        if (id){
            updateProduct(product);
            history.goBack()
        }else {
            addProduct(product);
            history.goBack();
        }
        clear();
    }
    useEffect(()=>{
        if (match){
            editProduct(params.id)
        }
    },[]);
    useEffect(()=>{
        if (productEditing){
            setId(productEditing.id);
            setName(productEditing.name);
            setPrice(productEditing.price);
            setStatus(productEditing.status);
        }
    },[productEditing]);
    function clear(product) {
        clearFormProduct(product);
    }

    return (
        <div className='col-6'>
            <form onSubmit={onHandleSubmit}>
                <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input type="text" className="form-control"
                           name='name'
                           onChange={(e) => setName(e.target.value)}
                           value={name}
                    />
                </div>
                <div className="form-group">
                    <label>Giá sản phẩm</label>
                    <input type="text" className="form-control"
                           name='price'
                           onChange={(e) => setPrice(e.target.value)}
                           value={price}
                    />
                </div>
                <div className="form-group">
                    <label className='mr-10'>Còn hàng</label>
                    <input type="checkbox"
                           name='status'
                           onChange={(e) => setStatus(e.target.checked)}
                           value={status}
                           checked={status}
                    />
                </div>
                <button type="submit" className="btn btn-primary mr-10">Lưu</button>
                <Link to='/product-list' className="btn btn-danger" onClick={clear}>Trở lại</Link>
            </form>
        </div>
    )
}

export default ProductActionPage;
