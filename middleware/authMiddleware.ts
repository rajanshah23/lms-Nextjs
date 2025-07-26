import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import  Role from './../src/database/models/userSchema'
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"




  const authMiddleware=async(req:NextRequest)=>{
    //check if login or not 
    const session = await getServerSession(authOptions)
    if(!session || session.user.Role !== Role.Admin){
        return Response.json({
            message:"You dont have permission to perform this action"
        },{status:401})
    }
    return NextResponse.next()
    
}

 export default authMiddleware