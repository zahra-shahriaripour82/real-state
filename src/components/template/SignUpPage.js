"use client"

import Link from "next/link";
import { useState } from "react"
// import  from "react-hot-toast";
import { Toaster ,toast} from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "@/module/Loader";
import styles from "./SignUpPage.module.css"

function SignUpPage() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [rePassoword,setRePassword]=useState("");
    const [loading, setLoading] = useState(false);
    const router=useRouter()
    const signupHandler= async (e)=>{
        e.preventDefault();

        if(password !== rePassoword) {

            toast.error("رمز و تکرار ان برابر نیست ")
        return
        }
        setLoading(true);
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
          });
         
    
          const data = await res.json();
        setLoading(false)
          if(res.status===201){
router.push("/signin")
          }else{
            toast.error(data.error)
          }
          
    }
  return (
    <div className={styles.form}>
<h4>فرم ثبت نام</h4>
<form>


<label>ایمیل:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>رمز عبور:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>تکرار رمز عبور:</label>
        <input
          type="password"
          value={rePassoword}
          onChange={(e) => setRePassword(e.target.value)}
        />
          {loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={signupHandler}>
            ثبت نام
          </button>
        )}
        </form>
        <p>
        حساب کاربری دارید؟
        <Link href="/signin">ورود</Link>
      </p>
      <Toaster/>
     </div> 
     
  )
}

export default SignUpPage