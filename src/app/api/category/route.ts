import { createCategory, getCategory } from "./categoryContoller";

 

export async function POST(req:Request) {
    return createCategory(req)
}

export async function GET(req:Request) {
    return getCategory()
} 

export async function DELETE(res:Request){
    return
}