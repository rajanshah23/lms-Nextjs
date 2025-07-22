import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId : process.env.Google_CLIENT_ID as string,
            clientSecret : process.env.Google_CLIENT_SECRET as string
        }),
    ],
    secret:process.env.NEXTAUTH_SECRET
})
export{handler as GET,handler as POST}