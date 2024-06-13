'use client';
//search icon
import { IoIosSearch } from "react-icons/io";
import useSearchModal from "@/app/hooks/useSearchModal";
import { useState } from "react";

const SearchFilters = () => {
    const searchModal = useSearchModal();
 
  return (
    <div
      onClick={()=>searchModal.open('location')}
     className="h-[48px] lg:h-[64px] lg: flex flex-row items-center justify-between border rounded-full"
     >
        <div className="hidden lg:block">
            <div className="flex flex-row items-center justify-between">
                <div className="h-[64px] cursor-pointer px-8 flex flex-col justify-center rounded-l-full hover:bg-gray-200 duration-200">
                  
                    <p className="text-lg font-semibold">Where ,who and when</p>
                    <p className="text-sm ">Choose your home requierments</p>
                </div>
               
            </div>
        </div>
        <div className="p-2">
            <div className="p-2 lg:p-4 cursor-pointer bg-accent hover:bg-accent-hover transition rounded-full font-semibold duration-150">
              <IoIosSearch   />
            </div>
        </div>
    </div>
  )
}

export default SearchFilters