import React from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline'
import './cart.scss';
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from "../../redux/cartReducer";
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from "../../makeRequest";

export default function Cart () {

    const products = useSelector(state=>state.cart.products)
    const dispatch = useDispatch();
    
    const calculateSubTotal = () => {
        let subTotal = 0;
        products.forEach((item) => (subTotal += item.quantity*item.price))
        return subTotal.toFixed(2)
    }

    const stripePromise = loadStripe('pk_test_qCO9xQXGzKGuNmzqAtGTEQRs')
    console.log(stripePromise)
    const handlePayment = async () => {
        try {
           const stripe = await stripePromise;
           console.log(stripe)
           const res = await makeRequest.post("/orders", {
            products,
           })
           console.log(res)

           await stripe.redirectToCheckout({
            sessionId:res.data.stripeSession.id,
           })
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="cart">
            <div className="cartContent">
                {products?.map((item)=> (
                    <div className="item" key={item.id}>
                        <img className="cartImg"src={process.env.REACT_APP_UPLOAD_URL + item.img} alt=""/>
                            <div className="cartDescription">
                                <h1 className="cartItemTitle">{item.title}</h1>
                                <p className="itemDescription">{item.description.substring(0,100)}...</p>
                                <div className="price">{item.quantity} x {item.price}$</div>
                            </div>
                        <DeleteOutlinedIcon className="deleteIcon" onClick={() => dispatch(removeItem(item.id))} />
                    </div>
                ))}
                <div className="total">
                    <span className="subtotal">SUBTOTAL</span>
                    <span className="amount">{calculateSubTotal()}$</span>
                </div>
                <button className="checkoutButton" onClick={handlePayment}>CHECKOUT</button>
                <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
            </div>
        </div>
    )
}