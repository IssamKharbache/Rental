import AccessDenied from "@/components/AccessDenied";
import ConversationDetail from "@/components/inbox/ConversationDetail";
import apiRequests from "@/utils/ApiService";

import { getUserId } from "@/utils/actions";
import { useState ,useEffect} from "react";
import { UserType } from "../page";
import { getAccessToken } from "@/utils/actions";

export type MessageType ={
  id:string;
  name:string;
  body:string;
  conversationId:string;
  sent_to:UserType;
  created_by:UserType
}

const ConversationPage = async ({params}:{params:{id:string}}) => {
  const userId = await getUserId();
  const token =  await getAccessToken();
  if(!userId || !token) {
      return(
       <AccessDenied label="messages" />
      )
  }
  const conversation = await apiRequests.get(`/api/chat/${params.id}/`) 
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-6 ">
       <ConversationDetail messages={conversation.messages}  token={token} conversation={conversation.conversations} userId={userId}  />
        </main>
  )
}

export default  ConversationPage;