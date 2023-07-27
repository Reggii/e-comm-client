import React, { useEffect, useState } from "react";
import "./product.scss";
import { ScrollRestoration, useParams } from 'react-router-dom'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import AddtocartIcon from "@mui/icons-material/AddShoppingCart";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../redux/cartReducer";

const Product = () => {
    const uploadUrl = process.env.REACT_APP_UPLOAD_URL
    const id = useParams().id

    const dispatch = useDispatch()
    const {data, loading, error} = useFetch(`/products/${id}?populate=*`);
    let image1 = uploadUrl + data?.attributes?.img?.data?.attributes?.url
    let image2 = uploadUrl + data?.attributes?.img2?.data?.attributes?.url

    const [mainImg, setMainImg] = useState(true)
    const [quantity, setQuantity] = useState(1);

    const toggleImage = () => {
        setMainImg((mainImg) => !mainImg)
    }

    return (
    <>
    {error ? "Something went wrong"
        : loading 
        ?  "Loading..."
        : ( 
    <div className="product">
        <div className="leftImg">
            <div className="secondaryImg" onClick={toggleImage}>
                {mainImg ? (
                    <img src={`${image1}`} alt="" />
                ) : (
                    <img src={`${image2}`} alt="" />
                )}
            </div>
        </div>
        <div className="rightImg">
            <div className="mainImg" onClick={toggleImage}>
                {mainImg ? (
                    <img src={`${image2}`} alt="" />
                ) : (
                    <img src={`${image1}`} alt="" />
                )}
            </div>
        </div>
        <div className="rightDetails">
            <h1 className="title" style={{color: 'rgb(104, 197, 85)', fontSize: 25, whiteSpace: 'nowrap'}}>{data?.attributes?.title}</h1>
            <p className="price" style={{color: 'white'}}>${data?.attributes?.price}.00</p>
            <span className="description">{data?.attributes?.description}</span>
            <div className="quantity">
              <button className="minus"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
                <input className="quantityInput" value={quantity}></input>
              <button className="plus" onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="addCart" onClick={() => dispatch(addtoCart({
                id: data.id,
                title: data?.attributes?.title,
                description: data?.attributes?.description,
                img: data?.attributes?.img?.data?.attributes?.url,
                price: data?.attributes?.price,
                quantity: quantity,
            }))}>
                <AddtocartIcon/>Add to Cart
            </button>
            <div className="link">
                <div className="wishlist">
                    <FavoriteBorderIcon className="wishlisticon"/> ADD TO WISH LIST
                </div>
            </div>
            <div className="productDetails">
                <p>
                    Vendor: {data?.vendor} <br/>
                    Product Type: {data?.type} <br/>
                    Tag: {data?.tags}
                </p>
            </div>
            <hr style={{top: '-14px'}}/>
            <div className="extraDetails">
                <div className="descriptionLink">
                    DESCRIPTION
                </div>
                <hr style={{width: '120px', left: '-240px'}}/>
                <div className="additionalInfo">
                    ADDITIONAL INFORMATION
                </div>
                <hr style={{width: '120px', left: '-240px'}}/>
                <div className="faq">
                    FAQ
                </div>
                <hr style={{width: '120px', left: '-240px'}}/>
            </div>
        </div>
        <ScrollRestoration />
    </div>
    )}
    </>
)}

export default Product;
