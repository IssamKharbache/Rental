'use client';
import React, { useEffect,useState } from "react";

import PropertyListItem from "./PropertyListItem"
//utils
import apiRequests from "@/utils/ApiService";
import { toast } from "sonner";
import { useRouter,useSearchParams } from "next/navigation";

import useSearchModal from "@/app/hooks/useSearchModal";
import { format } from "date-fns";
import Image from "next/image";


//defining the type of the data returned from the api
export type PropertyType = {
  id:string,
  title:string,
  price_per_night:number,
  image_url:string,
  is_favorite:boolean,
}
//

interface PropertyListProps {
  landhostId?:string | null;
  favorites?:boolean | null;
}
const PropertyList:React.FC<PropertyListProps> = ({landhostId,favorites}) => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const [properties,setProperties] = useState<PropertyType[]>([]);
  const searchModal = useSearchModal();
   
  const country = searchModal.query.country;
  const numGuests = searchModal.query.guests;
  const numBedrooms = searchModal.query.bedrooms;
  const numBathrooms = searchModal.query.bathrooms;
  const checkin = searchModal.query.checkIn;
  const checkout = searchModal.query.checkOut;
  const category = searchModal.query.category;

  //mark as favorite function
  const markFavorite = (id: string, is_favorite: boolean) => { 
    const tmpProperties = properties.map((property: PropertyType) => {
        if (property.id == id) {
            property.is_favorite = is_favorite
            if (is_favorite) {
                toast.success('Add to favorites');
                router.refresh();
            } else {
                toast.success('Removed from favorites');
                router.refresh();
            }
        }

        return property;
    })

    setProperties(tmpProperties);
}

 //getting properties from backend
  const getProperties = async () =>{
    let url = '/api/properties/'
    if(landhostId){
      //filtering only  user properties
      url +=`?landhostId=${landhostId}`
    }else if(favorites){
      url += '?is_favorites=true'
    }else{
      //search filters query
      let urlQuery = ''
      if(country){
        urlQuery +=  "&country=" + country
      }
      if(numGuests){
         urlQuery += "&guests=" + numGuests;
      }
      if(numBathrooms){
         urlQuery += "&bathrooms=" + numBathrooms;
      }
      if(numBedrooms){
        urlQuery += "&bedrooms=" + numBedrooms;
     }
     if(checkin){
      urlQuery +=  '&checkin=' + format(checkin,'yyyy-MM-dd')
     }
     if(checkout){
      urlQuery +=  '&checkout=' + format(checkout,'yyyy-MM-dd')
     }
     if(category){
      urlQuery +=  '&category=' + category
     }
     if(urlQuery.length){
      urlQuery = '?' + urlQuery.substring(1);
      url += urlQuery
     }
    }
    const propertiesData = await apiRequests.get(url)
    setProperties(propertiesData.data.map((property:PropertyType)=>{
      if(propertiesData.favorites.includes(property.id)){
        property.is_favorite = true
      }else{
        property.is_favorite = false

      }
      return property
    }))
  }
  //rendering properties when ever the component is rendered
  useEffect(()=>{
      getProperties();
      router.refresh();
  },[category,searchModal.query,searchParams])

  return (
    <>
    {
      properties.map((property)=>{
        return(
            <PropertyListItem  markFavorite={(is_favorite: any) => markFavorite(property.id, is_favorite)} key={property.id} property={property} />
        )
      // }): <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8">
      //   <Image src="/noresult.png" alt="no result" className="w-64 flex justify-center" height={2000} width={2000} quality={80}  />
      //  <p className="text-center text-5xl font-semibold">No result</p>
      //  <p className="text-center">Sorry we couldn't find anything </p>
       
      //  <button  type="button" className="bg-accent hover:bg-accent-hover py-4 px-7 rounded-xl"  onClick={()=> searchModal.open('location')}  >Try again</button>
      // </div>
})}
    </>
    
    )
  }


export default PropertyList;