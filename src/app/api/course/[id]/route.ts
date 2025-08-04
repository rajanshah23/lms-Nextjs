import { CourseUpdateInput } from "../../../../../types/type"
import { deleteCourse, getSingleCourse, updateCourse } from "../courseController"
 
export async function GET(req:Request,{params}:{params:{id:string}}) {
    const {id}=params
    return getSingleCourse(id)
    
}

export async function DELETE(req:Request,{params}:{params:{id:string}}) {
    const {id}=params
    return deleteCourse(id)
    
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const updatedData: CourseUpdateInput = await req.json();
  return updateCourse(id, updatedData);
}