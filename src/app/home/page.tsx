"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
function Home() {
    const {data:session}=useSession()
    if(session){
        return(
            <>
            <Image src={session.user?.image || "mero-profile.png"} alt="User-image" width={80} height={80}/>
            <h1>Welcome, {session?.user?.name}</h1>
            <h2>{session.user?.email}</h2>
            <button onClick={()=>signOut()}>signOut</button> 
            </>
        )
    }
    return(
    <div>
     <h1>Not logged In</h1>
      <button onClick={() =>signIn("google")}>Sign in with Google</button>
    </div>
  );
}
export default Home;