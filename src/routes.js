import React from "react";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    }, {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage/>
    }, {
        path: '/product/add',
        exact: false,
        main: () => <ProductActionPage/>
    }, {
        path: '/product/:id/edit',
        exact: false,
        main:() => <ProductActionPage/>
    }, {
        path: '',
        exact: false,
        main: () => <NotFound/>
    }
];

export default routes;
