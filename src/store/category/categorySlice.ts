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
        },
        setpush(state, action) {
            state.categories.push(action.payload)
        },
        deleteByIndex(state, action) {
            const index = state.categories.findIndex((category) => category._id == action.payload)
            if (index !== -1) {
                state.categories.splice(index, 1);
            }
        },
        resetstatus(state) {
            state.status = Status.Loading
        }
    }
})

export const { setStatus, setcategories, resetstatus, setpush,deleteByIndex } = categorySlice.actions
export default categorySlice.reducer



export function fetchCategories() {
    return async function fetchCategoriesThunk(dispatch: AppDispatch) {
        try {
            const response = await axios.get("http://localhost:3000/api/category")
            if (response.status === 200) {
                dispatch(setStatus(Status.Success))
                dispatch(setcategories(response.data.data))

            } else {
                dispatch(setStatus(Status.Failed))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.Failed))
        }
    }
}


export function addCategories(data: { name: string, description: string }) {
    return async function addCategoriesThunk(dispatch: AppDispatch) {
        try {
            const response = await axios.post("http://localhost:3000/api/category", data)
            if (response.status === 200) {
                dispatch(setStatus(Status.Success))
                dispatch(setpush(response.data.data))
            } else {
                dispatch(setStatus(Status.Failed))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.Failed))
        }
    }
}

export function deleteCategory(id: string) {
    return async function deleteCategoryThunk(dispatch: AppDispatch) {
        try {
            const response = await axios.delete('http://localhost:3000/api/category/' + id)
            if (response.status === 200) {
                dispatch(setStatus(Status.Success))
                dispatch(deleteByIndex(id))
            } else {
                dispatch(setStatus(Status.Failed))
            }
        } catch (error) {
            dispatch(setStatus(Status.Failed))
        }
    }
}