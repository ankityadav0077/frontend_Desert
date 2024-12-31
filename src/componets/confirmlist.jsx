import React from "react";

function Confiremdlist({item}){
    if (item.quantity!==0){
        return (
            
            <>
            <div className="border-b-4 border-gray-300   p-3">
                <h1>{item.name}</h1>
                <div className="flex justify-between mt-1 ">
                     <div className="flex gap-4">
                        <div className="text-orange-500 ">{item.quantity}x</div>
                        <div className="text-gray-500 ">@ ${item.price}</div>
                        <div className=" text-gray-500">${item.quantity*item.price}</div>
                    </div>
                    <div className="text-gray-500 text-xl"><button onClick={clickHenadle}><IoMdCloseCircleOutline /></button></div>
                </div>
            </div>
            </>
        )}
}

export default Confiremdlist;