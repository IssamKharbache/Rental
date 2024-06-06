'use client';
import Modal from "../Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../../forms/CustomButton";
import { useState } from "react";
import useSignupModal from "@/app/hooks/useSignupModal";
const LoginModal = () => {
  const [formError,setFormError] = useState(false);

    const loginModal = useLoginModal();
    const signupModal = useSignupModal();
    const content = (
      <>
            <h1 className="mb-12 text-2xl md:text-4xl text-center font-semibold">Welcome to rental , Please log in</h1>
            <form className="space-y-8">
            {formError && <div className="p-3 bg-red-400 text-white rounded-xl opacity-80 text-center">
             Error message
              </div>}
              <input type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-accent " placeholder="Your Email"/>
              <input type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-accent " placeholder="Password"/>
              <p className="flex gap-2">Don't have an account ?<span  onClick={()=>{
                loginModal.close();
                signupModal.open()
                }} className="underline text-blue-700 opacity-70 hover:opacity-90 duration-200 cursor-pointer">Sign up</span></p>
              <CustomButton type="submit" label="Log in" className="font-semibold text-xl" />
            </form>
      </>
    )
  return (
    <Modal isOpen={loginModal.isOpen}  close={loginModal.close} content={content} label="Log in" />
  )
}

export default LoginModal