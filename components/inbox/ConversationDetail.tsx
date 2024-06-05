"use client";
import CustomButton from "../forms/CustomButton"

const ConversationDetail = () => {
  return (
    <>
    <div className="max-h-[400px] overflow-auto flex flex-col space-y-4 mt-6">
    <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
        <p className="font-bold text-gray-500">John doe</p>
        <p>Hello im joe</p>
    </div>
    <div className="w-[80%] py-4 px-6 ml-[20%] rounded-xl bg-blue-200">
        <p className="font-bold text-gray-500">Estrella maria</p>
        <p>Hello im estrella</p>
    </div>
    </div>
    <div className="mt-4 py-4 px-6 flex items-center border border-gray-300 space-x-4 rounded-xl">
        <input type="text" placeholder="Type your message..." className="w-full p-4 bg-gray-200 rounded-xl" />
         <CustomButton  label="Send" onClick={()=>console.log("Clicked")} className="w-[100px]" />
             </div>
    </>
  )
}

export default ConversationDetail