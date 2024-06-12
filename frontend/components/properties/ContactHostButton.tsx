'use client';
import useLoginModal from "@/app/hooks/useLoginModal";
import apiRequests from "@/utils/ApiService";
import { useRouter } from "next/navigation";


interface ContactButtonProps {
userId:string | null; 
landhostId:string ;
}

const ContactButton:React.FC<ContactButtonProps> = ({
  userId,landhostId
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();
  const startConversation = async () => {
    if(userId){
      const conversation = await apiRequests.get(`/api/chat/start/${landhostId}/`)
      
      if(conversation.conversation_id){
        
        router.push(`/inbox/${conversation.conversation_id}`)
      }
    }else{
loginModal.open();
    }
  }
  return (
    <div onClick={startConversation} className="py-4 px-6 bg-accent hover:bg-accent-hover rounded-xl transition cursor-pointer mt-6">
        Contact
    </div>
  )
}

export default ContactButton