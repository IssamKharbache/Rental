"use client"
import { ConversationType } from "@/app/inbox/page";
import { useRouter } from "next/navigation";
import CustomButton from "../forms/CustomButton";

interface ConversationProps{
  userId:string|null,
  conversation:ConversationType
}

const Conversation:React.FC<ConversationProps> = ({userId,conversation}) => {
  const router = useRouter()
  const otherUser = conversation.users.find((user)=>user.id!= userId)
  
  
  return (
    <div className="px-6 py-4 border border-gray-300 rounded-xl ">
      <p className="mb-8 text-xl">{otherUser?.name}</p>
      <p onClick={()=>router.push(`/inbox/${conversation.id}`)} className="text-accent-hover font-semibold cursor-pointer opacity-80 hover:opacity-100 transition">Go to conversation</p>
    </div>
  )
}

export default Conversation;