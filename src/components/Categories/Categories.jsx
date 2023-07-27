import React from "react";
import './categories.scss'

export default function Categories() {

    function openProducts (e) {
        e.preventDefault();
        window.location.href='/products'
    }
    return (
        <div className="Categories">
            <div className="col">
                <div className="row">
                <button className="btn-remote" onClick={openProducts}>Remote Gear</button>
                <a href="http://localhost:3000/products">
                    
                    <img src="http://localhost:3000/img/categories/itguy1.jpg" width={320} alt="itguy1"></img>
                </a>
                </div>
                <div className="row">
                <button className="btn-office" onClick={openProducts}>Office Gear</button>
                <a href="http://localhost:3000/products">
                    
                    <img src="http://localhost:3000/img/categories/itguy2.jpg" alt="itguy2"></img>
                </a>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <button className="btn-womens" onClick={openProducts}>Women</button>
                <a href="http://localhost:3000/products">
                    
                    <img src="http://localhost:3000/img/categories/itgirl2.jpg" alt="itgirl2"></img>
                </a>
                </div>
            </div>
            <div className="col col-l">
                 <div className="row">
                    <div className="col">
                        <div className="row">
                        <button className="btn-sweats" onClick={openProducts}>Sweats</button>
                        <a href="http://localhost:3000/products">
                            
                            <img src="http://localhost:3000/img/categories/sweats.jpg" width={506} alt="sweats"></img>
                        </a>
                        </div>
                    </div>
                 </div>
                 <div className="row">
                    <button className="btn-accessories" onClick={openProducts}>Accessories</button>
                    <a href="http://localhost:3000/products">
                    <img src="http://localhost:3000/img/categories/accessories.jpg" height={325} width={506} alt="accessories"></img>
                    </a>
                 </div>
            </div>
        </div>
    )
}
