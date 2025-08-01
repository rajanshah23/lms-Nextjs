import { createSlice } from "@reduxjs/toolkit";
import { IPaymentInitialState, Status } from "./types";

const datas:IPaymentInitialState={
    payment:[],
    status:Status.Loading
}
const paymentSlice=createSlice({
    name:"payment",
    initialState:datas,
    reducers:{
        setPayment(state,action){
            state.payment=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        }
    }
})
 export const {setPayment,setStatus}=paymentSlice.actions
 export default paymentSlice.reducer