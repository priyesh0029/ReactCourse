import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Slices/cartSlice";
import userSlice from "../Slices/userSlice";


const store = configureStore({
    reducer : {
        cart : cartSlice,
        user : userSlice
        
    }
});

export default store;