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
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12  ">
      <div onClick={()=>setCategory('villas')} className={` flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'villas' ? "border-gray-700" :"border-white "} opacity-60 hover:opacity-100 duration-150 hover:border-black`}>
            
            <span>Villas</span>
        </div>
        <div onClick={()=>setCategory('mansions')} className={` flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'mansions' ? "border-gray-700" :"border-white "} opacity-60 hover:opacity-100 duration-150 hover:border-black`}>
           
            <span>Mansions</span>
        </div>
        <div onClick={()=>setCategory('tinyhouse')} className={` flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'tinyhouse' ? "border-gray-700" :"border-white "} opacity-60 hover:opacity-100 duration-150 hover:border-black`}>
            
            <span>Tiny house's</span>
        </div>
        <div onClick={()=>setCategory('countryside')} className={` flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'countryside' ? "border-black " :"border-white "} opacity-60 hover:opacity-100 duration-150 hover:border-black `}>
          
          <span>Country side</span>
      </div>
      <div onClick={()=>setCategory('domes')} className={` flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'domes' ? "border-black " :"border-white "} opacity-60 hover:opacity-100 duration-150 hover:border-black `} >
          <span>Domes</span>
      </div>
      <div onClick={()=>setCategory('riads')} className={` flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'riads' ? "border-black " :"border-white "} opacity-60 hover:opacity-100 duration-150 hover:border-black `}>
          <span>Riads</span>
      </div>
     
      </div>
    </>
  );
};

export default Categories;
