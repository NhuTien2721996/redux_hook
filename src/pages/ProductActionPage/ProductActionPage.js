import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addProductRequest, editProductRequest, updateProductRequest, clearForm} from "../../actions";
import {useHistory, useRouteMatch, useParams, Link} from 'react-router-dom';
import {useForm} from "react-hook-form";
import Select from "react-select";
import DatePicker, {registerLocale} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import vi from "date-fns/locale/vi";

registerLocale("vi", vi);

const branchList = [
    {value: "hà nội", label: "Hà Nội"},
    {value: "sài gòn", label: "Sài Gòn"},
    {value: "đà nẵng", label: "Đà Nẵng"},
];


function ProductActionPage() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [branch, setBranch] = useState('Hà Nội');
    const [status, setStatus] = useState(false);
    const [startDate, setStartDate] = useState('');
    const productEditing = useSelector((state) => state.ProductEditing);
    const dispatch = useDispatch();
    const history = useHistory();
    const match = useRouteMatch("/product/:id/edit");
    const params = useParams();
    const {register, errors, handleSubmit} = useForm();
    const onHandleSubmit = () => {
        let product = {
            id,
            name,
            price,
            branch,
            status,
            startDate
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
            setStartDate(productEditing.startDate);
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
                           ref={register({required: true})}
                    />
                    <p style={{color: "red"}}>
                        {errors.name && "Vui lòng nhập tên sản phẩm"}
                    </p>
                </div>
                <div className="form-group">
                    <label>Giá</label>
                    <input type="text" className="form-control"
                           name='price'
                           onChange={(e) => setPrice(e.target.value)}
                           value={price}
                           ref={register({required: true})}
                    />
                    <p style={{color: "red"}}>
                        {errors.price && "Vui lòng nhập giá sản phẩm"}
                    </p>
                </div>
                <div className="form-group">
                    <label>Chi nhánh</label>
                    <Select
                        name="branch"
                        options={branchList}
                        onChange={(branchList) => setBranch(branchList.value)}
                        value={branchList.filter(item => item.value.toLowerCase() === branch.toLowerCase())}
                        defaultValue={branchList[0].value}
                    />
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
                    <DatePicker
                        name="startDate"
                        selected={new Date()}
                        onChange={(date) => {
                            setStartDate(date.toLocaleString().split(",")[0]);
                        }}
                        locale="vi"
                        value={startDate}
                    />

                </div>
                <button type="submit" className="btn btn-primary mr-10">Lưu</button>
                <Link to="/product-list" className="btn btn-danger" onClick={clearProduct}>Quay lại</Link>
            </form>
        </div>

    )
}

export default ProductActionPage;
