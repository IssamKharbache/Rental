'use client';
import React, { useEffect,useState } from "react";

import PropertyListItem from "./PropertyListItem"
//utils
import apiRequests from "@/utils/ApiService";
import { useRouter } from "next/navigation";
//defining the type of the data returned from the api
export type PropertyType = {
  id:string,
  title:string,
  price_per_night:number,
  image_url:string,
}
//

interface PropertyListProps {
  landhostId?:string | null
}
const PropertyList:React.FC<PropertyListProps> = ({landhostId}) => {
  const [properties,setProperties] = useState<PropertyType[]>([]);
 
 //getting properties from backend
  const getProperties = async () =>{
    let url = '/api/properties/'
    if(landhostId){
      url +=`?landhostId=${landhostId}`
    }
    const propertiesData = await apiRequests.get(url)

    setProperties(propertiesData.data)
  }
  //rendering properties when ever the component is rendered
  useEffect(()=>{
      getProperties();
  },[])
  return (
    <>
    {
      properties.map((proprety)=>{
        return(
            <PropertyListItem key={proprety.id} property={proprety} />
        )
      })
    }
    </>
  )
}

export default PropertyList;