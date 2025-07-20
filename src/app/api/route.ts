import connectDB from "@/database/connection";
import User from "@/database/models/userSchema";

export async function GET() {
  connectDB();
  await User.create({
    email: "hello@gmail.com",
    username: "Haha",
    googleId: "123456789",
    profileImage: "thisisimage",
  });
  
  return Response.json({
    message: "You hit the api Route",
  });
}
