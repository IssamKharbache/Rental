import AccessDenied from "@/components/AccessDenied";
import LoadingEffect from "@/components/LoadingEffect";
import Conversation from "@/components/inbox/Conversation";
import apiRequests from "@/utils/ApiService";
import { getUserId } from "@/utils/actions";


export type UserType = {
  id:string,
  name:string,
  avatar_url:string
}

export type ConversationType = {
  id:string,
  users:UserType[]
}

const InboxPage = async () => {
const userId= await getUserId();
if(!userId){
  return(
     <AccessDenied label="conversations" />
  )
}

const conversations = await apiRequests.get("/api/chat/")
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-6 ">
        <h1 className="mt-6 mb-6 text-2xl font-semibold">My Inbox</h1>
       
        {
          conversations.map((conversation:ConversationType)=>{
            return(
              <Conversation key={conversation.id} conversation={conversation} userId={userId} />
            )
          })
        }
       
     
        </main>
  )
}

export default  InboxPage;