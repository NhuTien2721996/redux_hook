import React, {useEffect} from 'react';
import ProductList from "../../components/ProductList/ProductList";
import {useDispatch, useSelector} from "react-redux";
import {getAll, deleteProduct} from "../../actions";
import ProductItem from "../../components/ProductItem/ProductItem";
import {Link} from 'react-router-dom';
import {filterProduct} from "../../actions/index";

function ProductListPage() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll(products));
    }, []);
    const onDelete = (id) => {
        dispatch(deleteProduct(id));
    };
    const onHandleChange = (keyword) => {
        dispatch(filterProduct(keyword));
    };
    return (
        <div className='col'>
            <Link to='/product/add' className="btn btn-primary">Thêm mới</Link>
            <input type="text" className="form-control mt-15" placeholder="Search..."
                   onChange={(e) => onHandleChange(e.target.value)}/>
            <ProductList>
                {products.map((product, index) => {
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
