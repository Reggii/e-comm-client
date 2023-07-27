import React from "react";
import './cardhome.scss'
import { Link } from "react-router-dom";

export default function Card({ item }) {
    return (
        <Link to={`/product/${item.id}`} state={{
            id: item.id,
            title: item?.attributes.title,
            description: item?.attributes.description,
            img: process.env.REACT_APP_UPLOAD_URL + item.attributes.img.data.attributes.url,
            img2: process.env.REACT_APP_UPLOAD_URL + item.attributes.img2.data.attributes.url,
            price: item?.attributes.price,
            isNew: item?.attributes.isNew,
        }}>
        <div className="cardHome">
            <div className="imageContainer">
                <img className="image" src={
                    process.env.REACT_APP_UPLOAD_URL + item.attributes.img.data.attributes.url
                    } alt="" />
                <img className="image2" src={
                    process.env.REACT_APP_UPLOAD_URL + item.attributes.img2.data.attributes.url
                    } alt=""/>
            </div>
            <div className="title">{item?.attributes.title}</div>
            <div className="price">
                <h3>$ {item?.attributes.price}</h3>
            </div>
        </div>
        </Link>
    )
}