import { PiBuildingApartmentBold } from "react-icons/pi";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12 ">
      <div onClick={()=>setCategory('villas')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'villas' ? "border-gray-700" :"border-white "} opacity-60 hover:opacity-100 duration-150 hover:border-black`}>
            <PiBuildingApartmentBold />
            <span>Villa</span>
        </div>
        <div onClick={()=>setCategory('mansions')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'mansions' ? "border-gray-700" :"border-white "} opacity-60 hover:opacity-100 duration-150 hover:border-black`}>
            <PiBuildingApartmentBold />
            <span>Mansions</span>
        </div>
        <div onClick={()=>setCategory('tinyhouse')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'tinyhouse' ? "border-gray-700" :"border-white "} opacity-60 hover:opacity-100 duration-150 hover:border-black`}>
            <PiBuildingApartmentBold />
            <span>Tiny house's</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
