import { EnrollmentStatus } from "@/database/models/enrollmentSchema";

declare module "next-auth" {
    interface Session {
        user: {
            role: string,
            id: string,
            email: string,
            name: string,
            image: string
        }
    }
}

export interface CourseUpdateInput {
    title?: string;
    description?: string;
    price?: number;
    duration?: string;
    category?: string;
}

export interface LessonUpdateInput {

    title?: string;
    description?: string;
    videoUrl?: string,
    course?: string
}


export interface EnrollmentUpdateInput {
    student?: string,
    course?: string,
    enrollmentStatus?: EnrollmentStatus
    whatsApp?: string;
}