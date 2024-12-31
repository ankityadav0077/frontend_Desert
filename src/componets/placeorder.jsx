import React from "react";
import Cart from "./cart";
import { addItems } from "../store/features";
import { useDispatch, useSelector } from "react-redux";
function PlaceOrder({buttonclick}){
    const items=useSelector((state)=>state.cartItems)
    const dispatch=useDispatch()
    const handleclick=()=>{
            items.map((item)=>dispatch(addItems({name:item.name,quantity:0})))
            buttonclick()
            console.log("hello ji")
    }
    return (
        <>
        {/* <h1 bg-red-500>hello</h1> */}
        <div className="fixed  z-20 bottom-0 w-full md:top-1/2 md:left-1/2 md:translate-x-[-20%] md:translate-y-[-50%]">
        <Cart lable={false} butttonText="Start New Order" order={true} buttonclick={handleclick}></Cart>
        </div>
        </>
    )
}

export default PlaceOrder