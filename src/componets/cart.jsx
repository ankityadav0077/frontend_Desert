import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cartlist from "./cartlist";
import { FaRegCheckCircle } from "react-icons/fa";
import { GiMushroomCloud } from "react-icons/gi"; 
function Cart({lable=true,butttonText="Confirm Order",order=false,buttonclick}){
    const cart=useSelector((state)=>state.cartItems)
    const cartItem=cart.filter((x)=>(x.quantity!==0))
    const total=(cartItem.map((items)=>(items.price*items.quantity))).reduce((sum,curentvalue)=>sum+curentvalue,0)
    // console.log(total);
    
    return (
    <>
    <div className={`md:w-2/5 h-fit p-4 md:mx-2 md:rounded-2xl ${order?" md:rounded-3xl":""} bg-white rounded-t-3xl`}>
    {lable?<h1 className="text-orange-500 text-2xl font-bold">Your Cart ({cartItem.length})</h1>:<>
        <FaRegCheckCircle className="text-sky-500 text-3xl my-2" />
        <h1 className="text-2xl font-bold">Order Confirmed</h1>
        <h2 className="text-gray-500 text-sm">we hope you enjoy your food</h2>
    </>}
    
    <br /> 
    {cartItem.map((item)=><Cartlist item={item} key={item.name} order={order}/>)}
    <div className="flex justify-between p-3">
        <div className="text-gray-500">Order Total</div>
        <div className="text-2xl font-semibold">${total}</div>
    </div>
    {order?"":<div className="flex text-gray-500"><GiMushroomCloud className="text-sky-600 m-1"/> This is <span className="text-black mx-1"> carbon-neutral </span> delivery </div>}
    
    <button onClick={buttonclick} className="p-2 bg-orange-500 w-full rounded-3xl my-5 text-white font-semibold">{butttonText}</button>
    </div>
    </>)
}

export default Cart;