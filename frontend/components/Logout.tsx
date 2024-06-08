"use client"

import { useRouter } from "next/navigation"
import MenuLink from "./navbar/MenuLink"
import { resetAuthCookies } from "@/utils/actions"


const LogoutButton:React.FC = () => {
    //initialising the router
    const router = useRouter()
    const  submitLogout = async ()=>{
        resetAuthCookies();
        router.push("/")
    }
  return (
    <div>
        <MenuLink label="Log out" onClick={submitLogout} />
    </div>
  )
}

export default LogoutButton;