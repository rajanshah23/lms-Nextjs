import connectDB from "@/database/connection";
import Course from "@/database/models/courseSchema";
import { CourseUpdateInput, LessonUpdateInput } from "../../../../types/type";
import Lesson from "@/database/models/lessonSchema";
 
 

export async function createLesson(req:Request) {
    try {
        await connectDB()
        const{title,description,videoUrl,course }=await req.json()
        if(!title ||!description ||!videoUrl ||!course ){
            return Response.json({
                message:"Please provide all fields" },{status:400})
        }
        const data=await Lesson.create({title,description,videoUrl,course })
        return Response.json({
            message:'Lesson created successfully',data
        },{status:201})

    } catch (error) {
        console.log(error)
        return Response.json({
            message:"Sonething went wrong"
        },{status:500})
    }
    
}

export async function getAllLessons() {
    try {
        await connectDB()
        const data=await Lesson.find().populate("course")
        if(data.length==0){
            return Response.json({
                message:"No Lesson found"
            },{status:404})

        }
        return Response.json({
            message:"All lessonFetched",data
        },{status:200})
    } catch (error) {
        console.log(error)
        return Response.json({
            message:"Something went wrong"
        },{status:500})
        }
}

export async function getSingleLesson(id:string) {
    try {
        await connectDB()
        const data=await Lesson.findById(id)
        if(!data){
            return Response.json({
                message:"No Lesson with that id found"
            },{status:404})
        }
        return Response.json({
            message:"Lesson fetched Successfully",data
        },{status:200})
        
    } catch (error) {
        console.log(error)
        return Response.json({
            message:"Something went wrong"
        },{status:500})
    }
    
}

export async function deleteLesson (id:string) {
    try {
        await connectDB()
        await Lesson.findByIdAndDelete(id)
        return Response.json({
            message:"Lesson deleted successfully"
        },{status:200})
    } catch (error) {
        console.log(error)
        return Response.json({
            message:"Something went wrong"
        },{status:500})
    }
    
}

export async function updateLesson(id: string, updatedData:LessonUpdateInput) {
  try {
    await connectDB();
    const data = await Lesson.findByIdAndUpdate(id, updatedData, { new: true });

    return Response.json({
      message: "Lesson updated successfully",
      data,
    }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({
      message: "Something went wrong",
    }, { status: 500 });
  }
}
















