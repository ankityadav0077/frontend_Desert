import { createSlice} from "@reduxjs/toolkit";

const initialState={
    cartItems:[]
}

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItems:(state,action)=>{
            let item;
            state.cartItems.map((x)=>{
                if (action.payload.name===x.name){
                        // state.cartItems=state.cartItems.filter((x)=>(x.name!==action.payload.name))
                
                        x["quantity"]=action.payload.quantity
                        item=x      

                    }
                    // console.log(action.payload.name,x.name);
                    // console.log(x);  
                }
            )
            // console.log(state.cartItems);
            
            if (item===undefined && action.payload.qantity!==0 ){
                state.cartItems.push(action.payload)
                // console.log(action)
            }

        },
    }
})

export const {addItems}=cartSlice.actions
export default cartSlice.reducer
