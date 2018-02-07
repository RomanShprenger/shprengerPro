import React from 'react';
import './assets/Preloader.css';

function Preloader(props) {
    return <div className={"preloader " + (props.loaded ? "" : "show")}>
        <div className="preloader__image">
            <div className="loader">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    </div>;
}

export default Preloader;
