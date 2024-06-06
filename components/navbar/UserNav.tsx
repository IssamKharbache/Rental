"use client";

//icons
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaUserLarge } from "react-icons/fa6";

//states
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import MenuLink from "./MenuLink";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignupModal from "@/app/hooks/useSignupModal";



const UserNav = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const loginModal = useLoginModal();
  const signupModal = useSignupModal();
  return (
    <div className='p-2 relative inline-block border border-gray-300 rounded-full transition-all'>
      {
        isMenuOpen ? <button className="flex items-center" onClick={()=>setIsMenuOpen(false)}><CgClose/></button>:<button onClick={()=>setIsMenuOpen(true)} className='flex items-center gap-4'>
        <HiOutlineMenuAlt1  size={20} />
        <FaUserLarge size={20} />
        </button>
      }
     {
      isMenuOpen && (
        <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-md shadow-md flex flex-col cursor-pointer">
              <MenuLink label="Log in" onClick={
                ()=>{
                  loginModal.open();
                  setIsMenuOpen(false);
                }
              } />
              <MenuLink label="Sign up" onClick={()=>{
                  signupModal.open();
                  setIsMenuOpen(false);
                }
              }  />
        </div>
      )
     }
    </div>
  )
}

export default UserNav