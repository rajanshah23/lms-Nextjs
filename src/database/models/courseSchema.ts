import mongoose from "mongoose";
const Schema=mongoose.Schema

interface ICourse extends Document{
    title:string,
    description:string,
    Price:number,
    duration:string,
    category:mongoose.Types.ObjectId,
    lessons:mongoose.Types.ObjectId[],
    createdAt:Date
}

const courseSchema=new Schema<ICourse>({
    title:{
        type:String,
        required:true,
        unique:true
    },
     description:{
        type:String,
        required:true       
    },
    Price:{
        type:Number,
        required:true
    },
    duration:{
        type:String,
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category"
    },
    lessons:[{
        type:Schema.Types.ObjectId,
        ref:"Lessons"
    }],
    createdAt:{
         type:Date,
         default:Date.now()
}
})

const Course=mongoose.models.Course || mongoose.model("Course",courseSchema)
export default Course