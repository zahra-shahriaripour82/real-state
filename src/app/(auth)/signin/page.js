import { authOptions } from "@/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next"
import SignInPage from "@/template/SignInPage"

 async function Signin() {
  const session = await getServerSession(authOptions);
if(session) redirect("/")
  return (
<SignInPage/>
)
  
}

export default Signin