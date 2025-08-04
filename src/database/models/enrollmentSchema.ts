import mongoose from "mongoose";
const Schema=mongoose.Schema


interface IEnrollment extends Document{
    student:mongoose.Types.ObjectId,
    course:mongoose.Types.ObjectId,
    enrolledAt:Date,
    enrollmentStatus:EnrollmentStatus,
    whatsApp:string
}


 export enum EnrollmentStatus{
    Approve="Approve",
    Reject="Reject",
    Pending="Pending"
}

const enrollmentSchema=new Schema<IEnrollment>({
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
    },
    enrollmentStatus:{
        type:String,
        enum:[EnrollmentStatus.Approve,EnrollmentStatus.Reject,EnrollmentStatus.Pending],
        default:EnrollmentStatus.Pending
    },
    whatsApp:String

})

const Enrolled=mongoose.models.Enrolled || mongoose.model("Enrolled",enrollmentSchema)
export default Enrolled