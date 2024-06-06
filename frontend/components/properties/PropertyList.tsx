'use client';
import { useEffect,useState } from "react";

import PropertyListItem from "./PropertyListItem"
export type PropertyType = {
  id:string,
  title:string,
  price_per_night:number,
  image_url:string,
}
const PropertyList = () => {
  const [properties,setProperties] = useState<PropertyType[]>([]);
  const getProperties = async () =>{
     const url = 'http://localhost:8000/api/properties/';

     await fetch(url,{
      method: 'GET',
     }).then(response=>response.json()).then((res)=>{
      setProperties(res.data);
     }).catch((error)=>{
      console.log(error);
     })
  }

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

export default PropertyList