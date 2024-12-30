import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { addItems } from "../store/features";
import { useDispatch, useSelector } from "react-redux";
function Cartlist({item}){
    // console.log(item)
    const dispatch=useDispatch()

    const clickHenadle=()=>{
        dispatch(addItems({name:item.name,quantity:0}))
        console.log(item);
        
    }
    if (item.quantity!==0){
    return (
        
        <>
            <h1>{item.name}</h1>
            <div className="flex justify-between border-b-4 border-gray-300 shadow-xl">
                 <div className="flex gap-4">
                    <div className="text-orange-500 text-xl">{item.quantity}x</div>
                    <div className="text-gray-500 text-xl">@ ${item.price}</div>
                    <div className=" text-xl">${item.quantity*item.price}</div>
                </div>
                <div className=" text-xl"><button onClick={clickHenadle}><IoMdCloseCircleOutline /></button></div>
            </div>
        </>
    )}

}

export default Cartlist;