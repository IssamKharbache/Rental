"use client"
import useSearchModal,{SearchQueryType} from "@/app/hooks/useSearchModal";
import { useRouter } from "next/navigation";
import { useState } from "react";

const categories= [
  {
    name:'mansions',
    displayName:"Mansions",
  },
  {
    name:'villas',
    displayName:"Villas",
  },
  {
    name:'countryside',
    displayName:"Country side",
  },
  {
    name:'riads',
    displayName:"Riads",
  },
  {
    name:'domes',
    displayName:"Domes",
  },
  {
    name:'tinyhouse',
    displayName:"Tiny Houses",
  },
]
const Categories = () => {
  const router = useRouter();
  const [category,setCategory] = useState('');

  const searchModal = useSearchModal();
  const _setCategory = (_category:string) =>{
    setCategory(_category);
    const query:SearchQueryType = {
      country:searchModal.query.country,
      bathrooms:searchModal.query.bathrooms,
      bedrooms:searchModal.query.bedrooms,
      category:_category,
      checkIn:searchModal.query.checkIn,
      checkOut:searchModal.query.checkOut,
      guests:searchModal.query.guests
    }
    searchModal.setQuery(query);
    router.push('/')
    router.refresh();
    
  }
  return (
    <div className="pt-8 cursor-pointer pb-6 flex items-center space-x-12">
      <h1 className="text-xl font-semibold">Categories</h1>
      <div onClick={()=>_setCategory('')}   className={`flex flex-col items-center space-y-2 border-b-2  opacity-80 ${category == '' ?'border-black':'border-white'} hover:opacity-100 duration-150 hover:border-black`}>
          <span>All</span>
      </div>
      {categories.map((categoryName,idx)=>{
        return(
           <div key={idx} onClick={()=>_setCategory(categoryName.name)} className={`flex flex-col items-center space-y-2 border-b-2 ${category ==categoryName.name ?"border-black":"border-white"} opacity-80 hover:opacity-100 duration-150 hover:border-black`}>
            <span >{categoryName.displayName}</span>
        </div>
        )
      })}
       
       
    </div>
  )
}

export default Categories