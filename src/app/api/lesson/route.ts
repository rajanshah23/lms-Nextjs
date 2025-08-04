import { createLesson, getAllLessons } from "./lessonController";

export async function POST(req:Request){
    return createLesson(req)
}

export async function GET() {
    return getAllLessons()
}