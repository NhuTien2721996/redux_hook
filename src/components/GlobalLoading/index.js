import React from 'react';
import './style.css';
import {useSelector} from "react-redux";

function GlobalLoading() {
const showLoading=useSelector(state=>state.uiReducer.showLoading);
    const loading = (loading) => {
        let xhtml = null;
        if (loading) {
            xhtml =
                <div className="loading">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"
                         alt="loading"/>
                </div>
        }
        return xhtml;
    };

    return (
        <React.Fragment>
            {loading(showLoading)}
        </React.Fragment>
    )

}

export default GlobalLoading;
