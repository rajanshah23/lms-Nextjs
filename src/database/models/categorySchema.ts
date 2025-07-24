import mongoose from "mongoose";
const Schema=mongoose.Schema

interface ICategory extends Document{
    name:string,
    description:string,
    createdAt:Date
}

const categorySchema=new Schema<ICategory>({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Category= mongoose.models.category || mongoose.model("Category",categorySchema)
export default Category