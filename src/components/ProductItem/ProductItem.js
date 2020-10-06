import React from 'react';
import {Link} from "react-router-dom";

function ProductItem({product, index, onDelete}) {
    const deleteProduct = (id) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Bạn có chắc chắn muốn xóa không?')) {
            onDelete(id)

        }
    };
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.branch}</td>
            <td>{product.status ? "Còn hàng" : "Hết hàng"}</td>
            <td>{product.startDate}</td>
            <td>
                <button className="btn btn-danger mr-10" onClick={() => deleteProduct(product.id)}>Xóa</button>
                <Link to={`/product/${product.id}/edit`} className="btn btn-warning">Cập nhật</Link>
            </td>
        </tr>
    )
}

export default ProductItem;
