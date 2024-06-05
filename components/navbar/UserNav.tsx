"use client";

//icons
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaUserLarge } from "react-icons/fa6";

//states
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import MenuLink from "./MenuLink";



const UserNav = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className='p-2 relative inline-block border border-gray-300 rounded-full transition-all'>
      {
        isOpen ? <button className="flex items-center" onClick={()=>setIsOpen(false)}><CgClose/></button>:<button onClick={()=>setIsOpen(true)} className='flex items-center gap-4'>
        <HiOutlineMenuAlt1  size={20} />
        <FaUserLarge size={20} />
        </button>
      }
     {
      isOpen && (
        <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-md shadow-md flex flex-col cursor-pointer">
              <MenuLink label="Log in" onClick={()=>console.log("Login")
              } />
              <MenuLink label="Sign up" onClick={()=>console.log("logout")
              }  />
        </div>
      )
     }
    </div>
  )
}

export default UserNav