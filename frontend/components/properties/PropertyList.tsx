'use client';
import { useEffect,useState } from "react";

import PropertyListItem from "./PropertyListItem"
//utils
import apiRequests from "@/utils/ApiService";
//defining the type of the data returned from the api
export type PropertyType = {
  id:string,
  title:string,
  price_per_night:number,
  image_url:string,
}
//
const PropertyList = () => {
  const [properties,setProperties] = useState<PropertyType[]>([]);
 //getting properties from backend
  const getProperties = async () =>{
    const propertiesData = await apiRequests.get('/api/properties/')

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