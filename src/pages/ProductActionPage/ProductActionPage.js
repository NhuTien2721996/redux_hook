import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addProductRequest, editProductRequest, updateProductRequest, clearForm} from "../../actions";
import {useHistory, useRouteMatch, useParams, Link} from 'react-router-dom';
import {useForm} from "react-hook-form";


function ProductActionPage() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [branch, setBranch] = useState('Hà Nội');
    const [status, setStatus] = useState(false);
    const [date, setDate] = useState('');
    const productEditing = useSelector((state) => state.ProductEditing);
    const dispatch = useDispatch();
    const history = useHistory();
    const match = useRouteMatch("/product/:id/edit");
    const params = useParams();
    const { register, errors, handleSubmit } = useForm();
    const onHandleSubmit = () => {
        let product = {
            id,
            name,
            price,
            branch,
            status,
            date
        };
        if (!product.id) {
            dispatch(addProductRequest(product))
        } else {
            dispatch(updateProductRequest(product))
        }
        history.goBack();
        clearProduct();
    };
    useEffect(() => {
        if (match) {
            dispatch(editProductRequest(params.id))
        }
    }, []);
    useEffect(() => {
        if (productEditing) {
            setId(productEditing.id);
            setName(productEditing.name);
            setPrice(productEditing.price);
            setBranch(productEditing.branch);
            setStatus(productEditing.status);
            setDate(productEditing.date)
        }
    }, [productEditing]);
    const clearProduct = (product) => {
        dispatch(clearForm(product))
    };
    return (
        <div className="col-6">
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label>Tên</label>
                    <input type="text" className="form-control"
                           name='name'
                           onChange={(e) => setName(e.target.value)}
                           value={name}
                           ref={register({ required: true })}
                    />
                    <p style={{color:"red"}}>
                        {errors.name && "Vui lòng nhập tên sản phẩm"}
                    </p>
                </div>
                <div className="form-group">
                    <label>Giá</label>
                    <input type="text" className="form-control"
                           name='price'
                           onChange={(e) => setPrice(e.target.value)}
                           value={price}
                           ref={register({ required: true })}
                    />
                    <p style={{color:"red"}}>
                        {errors.price && "Vui lòng nhập giá sản phẩm"}
                    </p>


                </div>
                <div className="form-group">
                    <label>Chi nhánh</label>
                    <select className='form-control'
                            name="branch"
                            onChange={(e) => setBranch(e.target.value)}
                            value={branch}

                    >
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Sài Gòn">Sài Gòn</option>
                    </select>

                </div>
                <div className="form-group">
                    <label className="mr-10">Còn hàng</label>
                    <input type="checkbox"
                           name='status'
                           onChange={(e) => setStatus(e.target.checked)}
                           value={status}
                           checked={status}
                    />
                </div>
                <div className="form-group">
                    <label className="mr-10">Ngày đăng</label>
                    <input type="date"
                           name='date'
                           onChange={(e) => setDate(e.target.value)}
                           value={date}
                           ref={register({ required: true })}
                    />
                    <p style={{color:"red"}}>
                        {errors.date && "Vui lòng nhập ngày"}
                    </p>

                </div>
                <button type="submit" className="btn btn-primary mr-10">Lưu</button>
                <Link to="/product-list" className="btn btn-danger" onClick={clearProduct}>Quay lại</Link>
            </form>
        </div>

    )
}

export default ProductActionPage;
