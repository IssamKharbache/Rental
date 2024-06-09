"use client"

import { useRouter } from "next/navigation"
import MenuLink from "./navbar/MenuLink"
import { resetAuthCookies } from "@/utils/actions";

interface LogoutButtonProps {
  icon:React.ReactNode;
}

const LogoutButton:React.FC<LogoutButtonProps> = ({icon}) => {
    //initialising the router
    const router = useRouter()
    const  submitLogout = async ()=>{
        resetAuthCookies();
        router.push("/")
    }
  return (
    <div>
        <MenuLink icon={icon} label="Log out" onClick={submitLogout} />
    </div>
  )
}

export default LogoutButton;