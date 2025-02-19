import { authOptions } from "@/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next"
import SignUpPage from "@/template/SignUpPage";


 async function SignUp() {
  const session = await getServerSession(authOptions);
  if(session) redirect("/")
  return (
   <SignUpPage/>
  )
}

export default SignUp