import React from 'react';

function ProductList({children}) {
    return (
        <div className="col">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Stt</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá sản phẩm</th>
                    <th scope="col">Chi nhánh</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Ngày đăng</th>
                    <th scope="col">Hành động</th>
                </tr>
                </thead>
                <tbody>
                {children}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;
