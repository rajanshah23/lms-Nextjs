import { deleteEnrollment, getSingleEnrollment, updateEnrollment } from "../enrollmentController"
import { EnrollmentUpdateInput } from "../../../../../types/type"



export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params
    return getSingleEnrollment(id)

}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = params
    return deleteEnrollment(id)

}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const updatedData : EnrollmentUpdateInput = await req.json()
    return updateEnrollment(id, updatedData)
}

