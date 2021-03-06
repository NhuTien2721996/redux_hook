import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import GlobalLoading from "./components/GlobalLoading";

function App() {
    const showContentMenu = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            })
        }
        return <Switch>{result}</Switch>;
    };
    return (
        <Router>
            <Menu/>
            <div className="container">
                <div className="row">
                    {showContentMenu(routes)}
                </div>
                <GlobalLoading/>
            </div>
        </Router>
    )
}

export default App;
