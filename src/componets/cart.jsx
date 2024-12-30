import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cartlist from "./cartlist";
function Cart(){
    const cartItem=useSelector((state)=>state.cartItems)
    // console.log(cartItem);
    const [total,setTotal]=useState(0)
    return (
    <>
    <div>
    <h1 className="text-orange-500 text-2xl font-bold">Your Cart ({cartItem.length})</h1>
    <br />
    {cartItem.map((item)=>{
        // setTotal(total+item.price)
       return <Cartlist item={item} key={item.name} />})}
    <div className="">
        <div>Order Total</div>
        <div>{total}</div>
    </div>
    </div>
    </>)
}

export default Cart;