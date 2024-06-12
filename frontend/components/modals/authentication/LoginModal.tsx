'use client';
import Modal from "../Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../../forms/CustomButton";
import { useState } from "react";
import useSignupModal from "@/app/hooks/useSignupModal";
import apiRequests from "@/utils/ApiService";
import { handleLogin } from "@/utils/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const LoginModal = () => {
  const router = useRouter();
  const [formError,setFormError] = useState<string[]>([]);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const loginModal = useLoginModal();
  const signupModal = useSignupModal();

  //login function
  const submitLogin = async () =>{
     const formData = {
      email,password
     }
     const res = await apiRequests.postWithoutToken('/api/auth/login/',JSON.stringify(formData))
     if(res.access){
      setFormError([])
      toast.success("Logged in successfully");
     //handlelogin
      handleLogin(res.user.pk,res.access,res.refresh)
      loginModal.close();
      //redirecting
      router.push('/');
      router.refresh();
    
  }else{
    setFormError(res.non_field_errors)
  }
}
  
    const content = (
      <>
            <h1 className="mb-12 text-2xl md:text-4xl text-center font-semibold">Welcome to rental , Please log in</h1>
            <form action={submitLogin}  className="space-y-8">
              {/* errors */}
              {formError && formError.map((err,idx)=>(
              <div key={`error_${idx}`} className="p-3 bg-red-400 text-white rounded-xl opacity-80 text-center">
             {err}
              </div>
            )) }
              {/* inputs */}
              <input  onChange={(e)=>setEmail(e.target.value)} type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-accent " placeholder="Your Email"/>
              <input   onChange={(e)=>setPassword(e.target.value)} type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-accent " placeholder="Your Password"/>
              <p className="flex gap-2">Don't have an account ?<span  onClick={()=>{
                loginModal.close();
                signupModal.open()
                }} className="underline text-blue-700 opacity-70 hover:opacity-90 duration-200 cursor-pointer">Sign up</span></p>
              <CustomButton  type="submit" label="Log in" className="font-semibold text-xl" />
            </form>
      </>
    )
  return (
    <Modal isOpen={loginModal.isOpen}  close={loginModal.close} content={content} label="Log in" />
  )
}

export default LoginModal