import Image from "next/image"
import { CiHeart } from "react-icons/ci";


const PropertyListItem = () => {
  return (
    <div className="cursor-pointer">
   <div className="relative overflow-hidden aspect-square rounded-xl">
    <Image fill src="/estate/first.png" alt="Villa" sizes="(max-width:768px) 768px,(max-width:1200px):768px,768px" className="hover:scale-110 object-cover transition h-full w-full" />
   </div>
   <div className="mt-2">
    <p className="text-lg font-bold">Villa</p>
   </div>
   <div className="mt-2 ">
    <p className="text-sm text-gray-700"><strong>200$</strong>per night</p>
   </div>
    </div>
  )
}

export default PropertyListItem