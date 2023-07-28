import React, { useState } from "react";
import Cart from '../Cart/Cart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import './navbar.scss'
import { useSelector } from "react-redux";

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const products = useSelector((state) => state.cart.products)

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="img/en.png" alt="" />
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <Link className="link" to='/products/'>Products</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to='/'>cmd FASHION</Link>
                </div>
                <div className="right">
                    <div className="nav">
                        <Link className="link" to='/'>Home</Link>
                    </div>
                    <div className="nav">
                        <Link className="link" to='/'>About</Link>
                    </div>
                    <div className="nav">
                        <Link className="link" to='/'>Contact</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon className="searchIcon"/>
                        <PersonOutlineOutlinedIcon className="accountIcon"/>
                        <FavoriteBorderOutlinedIcon className="favoritesIcon"/>
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon/>
                            <span>{products.length}</span>
                        </div>
                </div>
                
                </div>
            </div>
                {open && <Cart/>}
        </div>
    );
    }