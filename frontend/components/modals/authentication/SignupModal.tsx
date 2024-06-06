'use client';
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "../Modal";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "@/components/forms/CustomButton";
import { useState } from "react";
const SignupModal = () => {
    const [formError,setFormError] = useState(false);
    const signupModal = useSignupModal();
    const loginModal = useLoginModal();
    const content = (
      <>
            <h1 className="mb-12 text-4xl text-center font-semibold">Sign up to start renting </h1>
            <form className="space-y-8">
            {formError && <div className="p-3 bg-red-400 text-white rounded-xl opacity-80 text-center">
             Error message
              </div>}
              <input type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-accent " placeholder="Your Email"/>
              <input type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-accent " placeholder="********"/>
              <p className="flex gap-2">Already have an account?<span onClick={()=>{
                loginModal.open();
                signupModal.close()
                }} className="underline text-blue-700 opacity-70 hover:opacity-90 duration-200 cursor-pointer">Log in</span>
                </p>
              <CustomButton label="Sign up" className="font-semibold text-xl" onClick={()=>console.log("Log in")
              } />

            </form>
      </>
    )
  return (
    <Modal isOpen={signupModal.isOpen}  close={signupModal.close} content={content} label="Sign up" />
  )
}

export default SignupModal;