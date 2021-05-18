import React from 'react';
import ShopMens from "./../../assets/img/shopMens.jpg"
import ShopWomens from "./../../assets/img/shopWomens.jpg"
import "./styles.scss"

const Directory = (props) => {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopWomens})`
                    }}
                >
                    <a>Shop Women's</a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopMens})`
                    }}
                >
                    <a>Shop Mens</a>
                </div>
            </div>
        </div>
    );
};

export default Directory;
