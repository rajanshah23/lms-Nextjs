import { LessonUpdateInput } from "../../../../../types/type"
import { deleteLesson, getSingleLesson, updateLesson } from "../lessonController"

export async function GET(req:Request,{params}:{params:{id:string}}) {
    const {id}= params
return getSingleLesson(id)
    
}
export async function DELETE(req:Request,{params}:{params:{id:string}}) {
    const {id}=  params
return deleteLesson(id)
    
}

export async function PATCH(req:Request,{params}:{params:{id:string}}) {
    const {id}= params
    const updateData:LessonUpdateInput=await req.json()
return updateLesson(id,updateData)
    
}