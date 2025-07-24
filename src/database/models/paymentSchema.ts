import mongoose from "mongoose";
const Schema=mongoose.Schema

enum Status{
    Completed="completed",
    Pending="pending",
    Failed="failed"
}
interface IPayment extends Document{
    student:mongoose.Types.ObjectId,
    course:mongoose.Types.ObjectId,
    amount:number,
    status:Status,
}

const paymnetSchema=new Schema<IPayment>({
    student:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    course:{
        type:Schema.Types.ObjectId,
        ref:"Course"
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
     enum:[Status.Completed,Status.Pending,Status.Failed],
     default:Status.Pending
    }
})
const Payment=mongoose.models.Payment || mongoose.model("Payment",paymnetSchema)
export default Payment