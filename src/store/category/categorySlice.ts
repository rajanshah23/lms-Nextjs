import { createSlice } from "@reduxjs/toolkit";
import { ICategoryInitialState, Status } from "./types";
import axios from "axios";
import { AppDispatch } from "../store";

const datas: ICategoryInitialState = {
    categories: [],
    status: Status.Loading
}

const categorySlice = createSlice({
    name: 'category',  //Slice name
    initialState: datas,

    //creating reducer
    reducers: {
        setStatus(state, action) {
            state.status = action.payload
        },
        setcategories(state, action) {
            state.categories = action.payload
        }
    }
})

export const {setStatus,setcategories}=categorySlice.actions
export default categorySlice.reducer
 


export function fetchCategories(){
    return async function fetchCategoriesThunk(dispatch:AppDispatch){
       try {
        const response =  await axios.get("http://localhost:3000/api/category")
       if(response.status === 200){
        dispatch(setStatus(Status.Success))
        dispatch(setcategories(response.data.data))

       }else{
        dispatch(setStatus(Status.Failed))
       }
       } catch (error) {
        console.log(error)
        dispatch(setStatus(Status.Failed))
       }
    }
}