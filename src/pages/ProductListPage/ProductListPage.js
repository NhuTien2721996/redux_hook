import React, {useEffect} from 'react';
import ProductList from "../../components/ProductList/ProductList";
import {useDispatch, useSelector} from "react-redux";
import {getAllRequest,deleteProductRequest} from "../../actions";
import ProductItem from "../../components/ProductItem/ProductItem";
import {Link} from 'react-router-dom'

function ProductListPage() {
    const products=useSelector((state)=>state.products);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllRequest())
    },[]);
    const onDelete=(id)=>{
        dispatch(deleteProductRequest(id))
    };
    return (
        <div className='col'>
            <Link to='/product/add' className="btn btn-primary">Thêm mới</Link>
            <ProductList>
                {products.map((product,index)=>{
                    return <ProductItem
                    key={index}
                    product={product}
                    index={index}
                    onDelete={onDelete}
                    />
                })}
            </ProductList>
        </div>
    )
}

export default ProductListPage;
