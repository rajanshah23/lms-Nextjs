import connectDB from "@/database/connection"
import Category from "@/database/models/categorySchema"
// import { authMiddleware } from "../../../../middleware/authMiddleware"
// import { NextRequest } from "next/server"

export async function createCategory(req: Request) {
    try {
    
        await connectDB()
        const { name, description } = await req.json()  //data haru req.json ma aauxan
        const existingCategory = await Category.findOne({ name: name })
        if (existingCategory) {
            return Response.json({
                message: "Category already exists with that name"
            }, { status: 400 })
        }
        await Category.create({  //kehe data halnu paryo vane create method use garne ho
            name: name,
            description: description
        })
        return Response.json({
            message: "Category created successfully"
        }, { status: 201 })
    } catch (error) {
        console.log(error)
        return Response.json({
            message: "Something went wrong"
        }, { status: 500 })

    }
}

export async function getCategory() {
    try {
             // const response=authMiddleware(req as NextRequest)
         await connectDB()
    const categories = await Category.find()  // find() ley array return garxa
    if (categories.length === 0) {
        return Response.json({
            message: "No category found"
        }, { status: 400 })
    }
    return Response.json({
        message: "Category fetched successfully",
        data:categories
    },{status:201})

    } catch (error) {
        console.log(error)
         return Response.json({
            message: "Something went wrong"
        }, { status: 500 })

        
    }
}

 