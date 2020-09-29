import React from 'react';

function ProductList({children}) {
    return (
        <div className='col'>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Trạng thái</th>
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
