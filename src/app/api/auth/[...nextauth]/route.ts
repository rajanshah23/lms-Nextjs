import connectDB from "@/database/connection";
import User from "@/database/models/userSchema";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }): Promise<boolean> {
      try {
        await connectDB(); // database connect xa ke xaena verify gareko
        //database connect xa vane email checkgarxa
        const existingUser = await User.findOne({ email: user.email }); //select * from user where email=user.email............ findOne  ley object return garxa
        //tyo email ko user xaena vane create garxa
        if (!existingUser) {
          await User.create({
            username: user.name,
            email: user.email,
            profileImage: user.image,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});
export { handler as GET, handler as POST };
