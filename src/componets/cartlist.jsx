import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { addItems } from "../store/features";
import { useDispatch, useSelector } from "react-redux";
function Cartlist({item,order=false}){
    // console.log(item)
    const dispatch=useDispatch()

    const clickHenadle=()=>{
        dispatch(addItems({name:item.name,quantity:0}))
        console.log(item);
        
    }
    if (item.quantity!==0){
    return (
        
        <>
        <div className="border-b-4 border-gray-300   p-3">
            <h1>{item.name}</h1>
            <div className="flex justify-between mt-1 ">
                 <div className="flex gap-4">
                    <div className="text-orange-500 ">{item.quantity}x</div>
                    <div className="text-gray-500 ">@ ${item.price}</div>
                    {order?"":<div className=" text-gray-500">${item.quantity*item.price}</div>}
                </div>
                {order?<div className=" text-xl">${item.quantity*item.price}</div>:<div className="text-gray-500 text-xl"><button onClick={clickHenadle}><IoMdCloseCircleOutline /></button></div>}
                
            </div>
        </div>
        </>
    )}

}

export default Cartlist;