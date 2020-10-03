import React from 'react';
import {Route, Link} from 'react-router-dom'

function Menu() {
    const menus = [
        {
            name: "Trang chủ",
            to: "/",
            exact: true
        }, {
            name: "Quản lý sản phẩm",
            to: "/product-list",
            exact: false
        }
    ];
    const showMenu = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <Route
                        key={index}
                        path={menu.to}
                        exact={menu.exact}
                        children={({match}) => {
                            let active = match ? 'active' : '';
                            return (
                                <li className={active}>
                                    <Link to={menu.to}>{menu.name}</Link>
                                </li>
                            )
                        }}
                    />
                )
            })
        }
        return result;
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {showMenu(menus)}
                </ul>
            </div>
        </nav>
    )
}

export default Menu;
