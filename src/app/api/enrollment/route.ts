import { createEnrollment,  getAllEnrollments } from "./enrollmentController";

export async function POST(req:Request) {
    return createEnrollment(req)
}
export async function GET( ) {
    return getAllEnrollments()
}