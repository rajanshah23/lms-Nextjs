import mongoose from "mongoose";
const Schema=mongoose.Schema


interface IEnrollment extends Document{
    student:mongoose.Types.ObjectId,
    course:mongoose.Types.ObjectId,
    enrolledAt:Date
}


const ecrollmentSchema=new Schema<IEnrollment>({
    student:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    course:{
        type:Schema.Types.ObjectId,
        ref:"Course"
    },
    enrolledAt:{
        type:Date,
        default:Date.now()
    }

})

const Enrolled=mongoose.models.Enrolled || mongoose.model("Enrolled",ecrollmentSchema)
export default Enrolled