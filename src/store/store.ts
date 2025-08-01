import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
import paymentSlice from "./payment/paymentSlice";
 

//In react we can use like this 
// const store = configureStore({
//     reducer: {
//         category: categorySlice,
//         payment: paymentSlice
//     }
// })



//In nextjs we caan use like this  yeuta function vitra aarko function rakhni 
export const makeStore=()=>{
    return configureStore({
        reducer:{
            category:categorySlice,
            payment:paymentSlice
        }
    })
}

 // Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']