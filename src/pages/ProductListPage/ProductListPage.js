import React, {useEffect} from 'react';
import ProductList from "../../components/ProductList/ProductList";
import {deleteProductRequest, getAllRequest} from './../../actions/index';
import { useDispatch, useSelector} from 'react-redux';
import ProductItem from "../../components/ProductItem/ProductItem";
import {Link} from "react-router-dom";


function ProductListPage() {
    const productList = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const getAllProduct =() => dispatch(getAllRequest());
    const deleteProduct = (id) => dispatch(deleteProductRequest(id));
    useEffect(() => {
        getAllProduct()
    }, []);

    function onDelete(id) {
        deleteProduct(id)
    }

    return (
        <div className='col'>
            <Link to='/product/add' className="btn btn-primary">Thêm mới</Link>
            <ProductList>
                {productList.map((product,index)=>{
                  return   <ProductItem
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
