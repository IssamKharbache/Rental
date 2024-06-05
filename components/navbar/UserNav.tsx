//icons
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaUserLarge } from "react-icons/fa6";



const UserNav = () => {
  return (
    <div className='p-2 relative inline-block border rounded-full'>
     <button className='flex items-center gap-4'>
     <HiOutlineMenuAlt1  size={20} />
     <FaUserLarge size={20} />
     </button>
    </div>
  )
}

export default UserNav