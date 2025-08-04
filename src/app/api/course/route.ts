import { createCourse, getAllCourses } from "./courseController"

 export async function POST(req:Request) {
    return createCourse(req)
}


export async function GET( ) {
    return getAllCourses()
}