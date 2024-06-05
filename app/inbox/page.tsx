import Conversation from "@/components/inbox/Conversation";

const InboxPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-6 ">
        <h1 className="mt-6 mb-6 text-2xl">My Inbox</h1>
        <Conversation />
        <Conversation />
        <Conversation />
        </main>
  )
}

export default  InboxPage;