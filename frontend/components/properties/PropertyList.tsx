'use client';
import React, { useEffect,useState } from "react";

import PropertyListItem from "./PropertyListItem"
//utils
import apiRequests from "@/utils/ApiService";
import { toast } from "sonner";
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
  const [properties,setProperties] = useState<PropertyType[]>([]);

  const markFavorite = (id: string, is_favorite: boolean) => { 
    const tmpProperties = properties.map((property: PropertyType) => {
        if (property.id == id) {
          
            property.is_favorite = is_favorite
            if (is_favorite) {
                toast.success('Add to favorites')
            } else {
                toast.success('Removed from favorites')
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
      url +=`?landhostId=${landhostId}`
    }else if(favorites){
      url += '?is_favorites=true'
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
  },[])
  return (
    <>
    {
      properties.map((property)=>{
        return(
            <PropertyListItem  markFavorite={(is_favorite: any) => markFavorite(property.id, is_favorite)} key={property.id} property={property} />
        )
      })
    }
    </>
  )
}

export default PropertyList;