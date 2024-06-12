"use client";
import useLoginModal from "@/app/hooks/useLoginModal";
import Image from "next/image";
import React from "react";

interface AccessDeniedProps {
    label: string;
}

const AccessDenied:React.FC<AccessDeniedProps> = ({label}) => {
  const loginModal = useLoginModal();
  return (
    <main className="max-w-[1500px] mx-auto px-6 py-12 ">
      <div className="w-[500px] h-[500px] mx-auto px-12">
        <Image
          src="/accessdenied.png"
          alt="Access denied"
          width={1500}
          height={1500}
          quality={80}
          className="relative w-full flex items-center justify-center "
        />
      </div>
      <p className="text-5xl font-semibold flex flex-col items-center gap-8 text-center">
        You have to log in to see your {label}
        <span
        onClick={()=>loginModal.open()}
          className="bg-accent text-sm py-4 px-12 rounded-xl hover:bg-accent-hover hover:text-white duration-200 cursor-pointer"
          
        >
          Log in
        </span>
      </p>
    </main>
  );
};

export default AccessDenied;
