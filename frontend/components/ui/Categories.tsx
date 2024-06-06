import { PiBuildingApartmentBold } from "react-icons/pi";

const Categories = () => {
  return (
    <div className="pt-8 cursor-pointer pb-6 flex items-center space-x-12">
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 duration-150 hover:border-black">
            <PiBuildingApartmentBold />
            <span>Mansions</span>
        </div>
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 duration-150 hover:border-black">
            <PiBuildingApartmentBold />
            <span>Mansions</span>
        </div>
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 duration-150 hover:border-black">
            <PiBuildingApartmentBold />
            <span>Mansions</span>
        </div>
    </div>
  )
}

export default Categories