import connectDB from "@/database/connection";
import Course from "@/database/models/courseSchema";
import { CourseUpdateInput } from "../../../../types/type";
import Lesson from "@/database/models/lessonSchema";
 
 

export async function createCourse(req:Request) {
    try {
        await connectDB()
        const{title,description,price,duration,category}=await req.json()
        if(!title ||!description ||!price ||!duration ||!category){
            return Response.json({
                message:"Please provide all fields" },{status:400})
        }
        const data=await Course.create({title,description,price,duration,category})
        return Response.json({
            message:'Course created successfully',data
        },{status:201})

    } catch (error) {
        console.log(error)
        return Response.json({
            message:"Sonething went wrong"
        },{status:500})
    }
    
}

export async function getAllCourses() {
    try {
        await connectDB()
        const data=await Course.find().populate("category")
        if(data.length==0){
            return Response.json({
                message:"No course found"
            },{status:404})

        }
        return Response.json({
            message:"All Course Fetched",data
        },{status:200})
    } catch (error) {
        console.log(error)
        return Response.json({
            message:"Something went wrong"
        },{status:500})
        }
}

export async function getSingleCourse(id:string) {
    try {
        await connectDB()
        const data=await Course.findById(id)
        if(!data){
            return Response.json({
                message:"No course with that id found"
            },{status:404})
        }
        return Response.json({
            message:"Course fetched Successfully",data
        },{status:200})
        
    } catch (error) {
        console.log(error)
        return Response.json({
            message:"Something went wrong"
        },{status:500})
    }
    
}

export async function deleteCourse (id:string) {
    try {
        await connectDB()
        await Course.findByIdAndDelete(id)
         await Lesson.deleteMany({course:id})
        return Response.json({
            message:"Course deleted successfully"
        },{status:200})
    } catch (error) {
        console.log(error)
        return Response.json({
            message:"Something went wrong"
        },{status:500})
    }
    
}

export async function updateCourse(id: string, updatedData:CourseUpdateInput) {
  try {
    await connectDB();
    const data = await Course.findByIdAndUpdate(id, updatedData, { new: true });

    return Response.json({
      message: "Course updated successfully",
      data,
    }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({
      message: "Something went wrong",
    }, { status: 500 });
  }
}
















