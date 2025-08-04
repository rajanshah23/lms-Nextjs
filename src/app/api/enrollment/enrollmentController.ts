import connectDB from "@/database/connection";
import { EnrollmentUpdateInput } from "../../../../types/type";
import Enrolled from "@/database/models/enrollmentSchema";



export async function createEnrollment(req: Request) {
    try {
        await connectDB()
        const { student, course,whatsApp } = await req.json()
        if (!student || !course ||!whatsApp) {
            return Response.json({
                message: "Please provide all fields"
            }, { status: 400 })
        }
        const alreadyEnrolled = await Enrolled.findOne({ student, course ,whatsApp});
        if (alreadyEnrolled) {
            return Response.json({
                message: "Student already enrolled in this course",
            }, { status: 400 });
        }
        const data = await Enrolled.create({ student, course,whatsApp })
        return Response.json({
            message: 'Enrollment created successfully', data
        }, { status: 201 })

    } catch (error) {
        console.log(error)
        return Response.json({
            message: "Something went wrong"
        }, { status: 500 })
    }

}

export async function getAllEnrollments() {
    try {
        await connectDB()
        const data = await Enrolled.find().populate("student").populate("course")
        if (data.length == 0) {
            return Response.json({
                message: "No enrollment found"
            }, { status: 404 })

        }
        return Response.json({
            message: "All Enrollment Fetched", data
        }, { status: 200 })
    } catch (error) {
        console.log(error)
        return Response.json({
            message: "Something went wrong"
        }, { status: 500 })
    }
}

export async function getSingleEnrollment(id: string) {
    try {
        await connectDB()
        const data = await Enrolled.findById(id).populate("student").populate("course")
        if (!data) {
            return Response.json({
                message: "No enrollment with that id found"
            }, { status: 404 })
        }
        return Response.json({
            message: "Enrollment fetched Successfully", data
        }, { status: 200 })

    } catch (error) {
        console.log(error)
        return Response.json({
            message: "Something went wrong"
        }, { status: 500 })
    }

}

export async function deleteEnrollment(id: string) {
    try {
        await connectDB()
        await Enrolled.findByIdAndDelete(id)

        return Response.json({
            message: "Enrollment deleted successfully"
        }, { status: 200 })
    } catch (error) {
        console.log(error)
        return Response.json({
            message: "Something went wrong"
        }, { status: 500 })
    }

}

export async function updateEnrollment(id: string, updatedData: EnrollmentUpdateInput) {
    try {
        await connectDB();
        const data = await Enrolled.findByIdAndUpdate(id, updatedData, { new: true });

        return Response.json({
            message: "Enrollment updated successfully",
            data,
        }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({
            message: "Something went wrong",
        }, { status: 500 });
    }
}
















