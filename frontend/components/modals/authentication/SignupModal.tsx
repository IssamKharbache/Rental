'use client';
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "../Modal";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "@/components/forms/CustomButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import apiRequests from "@/utils/ApiService";
import { toast } from "sonner";

const SignupModal = () => {
    //initializing router 
    const router =  useRouter();
    //states to handle the form
    const [email,setEmail] = useState('');
    const [password1,setPassword1] = useState('');
    const [password2,setPassword2] = useState('');
    const [formError,setFormError] = useState<string[]>([]);
    //modals
    const signupModal = useSignupModal();
    const loginModal = useLoginModal();

    //submit function

    const handleSubmit = async  () =>{
         const formData = {
          email:email,
          password1:password1,
          password2:password2
         }
         const response = await apiRequests.post('/api/auth/register/',JSON.stringify(formData));
         if(response.access){
           toast.success("User created successfully");
          //handlelogin
           signupModal.close();
           //redirecting
          router.push('/');
          setFormError([]);
         }else{
          //getting the server errors
          const tmpErrors :string[] = Object.values(response).map((error:any)=>{
            return error
          })
          setFormError(tmpErrors);
         }
    }
    const content = (
      <>
            <h1 className="mb-12 text-4xl text-center font-semibold">Sign up to start renting </h1>
            <form action={handleSubmit}  className="space-y-8">
            {formError && formError.map((err,idx)=>(
              <div key={`error_${idx}`} className="p-3 bg-red-400 text-white rounded-xl opacity-80 text-center">
             {err}
              </div>
            )) }
              <input type="email" onChange={(e)=>setEmail(e.target.value)} className="w-full h-[54px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-accent " placeholder="Your Email"/>
              <input type="password" onChange={(e)=>setPassword1(e.target.value)} className="w-full h-[54px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-accent " placeholder="Password"/>
              <input type="password" onChange={(e)=>setPassword2(e.target.value)} className="w-full h-[54px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-accent " placeholder="Repeat Password"/>
              <p className="flex gap-2">Already have an account?<span onClick={()=>{
                loginModal.open();
                signupModal.close()
                }} className="underline text-blue-700 opacity-70 hover:opacity-90 duration-200 cursor-pointer">Log in</span>
                </p>
              <CustomButton  type="submit"  label="Sign up" className="font-semibold text-xl"
               />

            </form>
      </>
    )
  return (
    <Modal isOpen={signupModal.isOpen}  close={signupModal.close} content={content} label="Sign up" />
  )
}

export default SignupModal;