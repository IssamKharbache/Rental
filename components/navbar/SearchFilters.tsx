
//search icon
import { IoIosSearch } from "react-icons/io";

const SearchFilters = () => {
  return (
    <div className="h-[48px] lg:h-[64px] lg: flex flex-row items-center justify-between border rounded-full">
        <div className="hidden lg:block">
            <div className="flex flex-row items-center justify-between">
                <div className="h-[64px] cursor-pointer px-8 flex flex-col justify-center rounded-l-full hover:bg-gray-200 duration-200">
                    <p className="text-xs font-semibold">Where ?</p>
                    <p className="text-sm">Wanted Location</p>
                </div>
                <div className="h-[64px] cursor-pointer px-8 flex flex-col justify-center  hover:bg-gray-200 duration-200">
                    <p className="text-xs font-semibold">Check in</p>
                    <p className="text-sm">Add dates</p>
                </div>
                <div className="h-[64px] cursor-pointer px-8 flex flex-col justify-center  hover:bg-gray-200 duration-200">
                    <p className="text-xs font-semibold">Check out</p>
                    <p className="text-sm">Add dates</p>
                </div>
                <div className="h-[64px]  cursor-pointer px-8 flex flex-col justify-center  hover:bg-gray-200 duration-200">
                    <p className="text-xs font-semibold">Who</p>
                    <p className="text-sm">Add guests</p>
                </div>
            </div>
        </div>
        <div className="p-2">
            <div className="p-2 lg:p-4 cursor-pointer bg-accent hover:bg-accent-hover transition rounded-full font-semibold duration-150">
              <IoIosSearch   />
            </div>
        </div>
    </div>
  )
}

export default SearchFilters