"use client";

//icons
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaUserLarge } from "react-icons/fa6";

//states
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import MenuLink from "./MenuLink";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignupModal from "@/app/hooks/useSignupModal";
import LogoutButton from "../Logout";
import { useRouter } from "next/navigation";

//icons
import { BsFillHouseHeartFill } from "react-icons/bs";
import { HiLogin } from "react-icons/hi";
import { HiLogout } from "react-icons/hi";
import { FiUserPlus } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

interface UserNavProps {
  userId?: string | null;
}

const UserNav: React.FC<UserNavProps> = ({ userId }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const loginModal = useLoginModal();
  const signupModal = useSignupModal();
  return (
    <div className="p-2 relative inline-block border border-gray-300 rounded-full transition-all">
      {isMenuOpen ? (
        <button
          className="flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <CgClose />
        </button>
      ) : (
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-4"
        >
          <HiOutlineMenuAlt1 size={20} />
          <FaUserLarge size={20} />
        </button>
      )}
      {isMenuOpen && (
        <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-md shadow-md flex flex-col cursor-pointer">
          {userId ? (
            <>
              <MenuLink
                icon={<FaRegBuilding  />}
                label="Properties"
                onClick={() => {
                  router.push("/myproperties");
                  setIsMenuOpen(false);
                }}
              />
              <MenuLink
                icon={<FaCalendarAlt />}
                label="Reservations"
                onClick={() => {
                  router.push("/myreservations");
                  setIsMenuOpen(false);
                }}
              />
               <MenuLink
                icon={<BsFillHouseHeartFill />}
                label="Favorites"
                onClick={() => {
                  router.push("/myfavorites");
                  setIsMenuOpen(false);
                }}
              />
              <MenuLink
                icon={<AiOutlineMessage size={20} />}
                label="Inbox"
                onClick={() => {
                  router.push("/inbox");
                  setIsMenuOpen(false);
                }}
              />
              <LogoutButton  icon={<HiLogout />}/>
            </>
          ) : (
            <>
              <MenuLink
                icon={<HiLogin />}
                label="Log in"
                onClick={() => {
                  loginModal.open();
                  setIsMenuOpen(false);
                }}
              />
              <MenuLink
                icon={<FiUserPlus />
                }
                label="Sign up"
                onClick={() => {
                  signupModal.open();
                  setIsMenuOpen(false);
                }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserNav;
