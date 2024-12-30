import React, { useEffect, useState } from 'react';
import { addItems} from '../store/features';
import { useDispatch,useSelector } from 'react-redux';
import { MdAddShoppingCart } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuCircleMinus } from "react-icons/lu";
import { nanoid } from '@reduxjs/toolkit';

const Card = ({ title="", description="", price="", imageUrl="/src/assets/images/image-waffle-thumbnail.jpg" ,item}) => {
    // console.log(item);
    
    const dispatch=useDispatch()
    const x=useSelector((state)=>state.cartItems)
    const [itemqunt,setItemQuent]=useState(item.quantity)
    useEffect(()=>{
            dispatch(addItems({...item,"quantity":itemqunt,}))
            // console.log(`hello ${itemqunt}`,item);
    },[itemqunt])
    useEffect(()=>{
        console.log(item.quantity);
        
        setItemQuent(item.quantity)},[item.quantity])
    return (
        <div className="  md:w-1/3 lg:w-1/4">
            <img src={imageUrl} alt={title} className="card-image rounded-2xl w-full z-10 border-4 hover:border-orange-500" />
            <div className={` border-4 relative  p-2  flex justify-around mx-auto z-20 -mt-7  rounded-3xl  w-36 ${itemqunt===0?"bg-white hover:border-orange-500 hover:text-orange-500":"bg-orange-500 text-white  border-orange-500 hover:text-white"} `} >{itemqunt===0?<>
                <MdAddShoppingCart className='text-2xl text-orange-500' /><button onClick={()=>setItemQuent(1)}>Add To Cart</button></>:<><button onClick={()=>setItemQuent(itemqunt-1)}><LuCircleMinus className='text-2xl hover:bg-white rounded-2xl hover:text-orange-500'/>
            </button>
            <h1 >{itemqunt}</h1>
            <button  onClick={()=>setItemQuent(itemqunt+1)}><IoMdAddCircleOutline className='text-2xl hover:bg-white rounded-2xl hover:text-orange-500'/></button></>}</div>
            <div className="card-content m-2">
                <p className="card-description text-gray-500 text-xl font-semibold">{description}</p>
                <h2 className="card-title text text-2xl font-semibold">{title}</h2>
                <p className="card-price text-orange-600 text-2xl font-semibold">${price}</p>
            </div>
        </div>
    );
};

export default Card;