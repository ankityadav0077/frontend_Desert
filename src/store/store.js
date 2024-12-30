import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./features.js"
export const store=configureStore({
    reducer:cartReducer
})