'use client';
import { useState } from "react";
import Modal from "../Modal"
import useSearchModal, { SearchQueryType } from "@/app/hooks/useSearchModal"
import SelectCountry,{SelectCountryValue} from "../../forms/SelectCountry";
import CustomButton from "@/components/forms/CustomButton";
import { Range } from "react-date-range";
import DatePicker from "@/components/forms/Calendar";

//icons
import {FaArrowRightLong} from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const initialDateRange = {
    startDate:new Date(),
    endDate: new Date(),
    key:'selection'
  }

const SearchModal = () => {
    const searchModal = useSearchModal();
    const [country,setCountry] = useState<SelectCountryValue>();
    const [numGuests,setNumGuests] = useState<string>('1');
    const [Numbedrooms,setNumBedrooms] = useState<string>('0');
    const [Numbathrooms,setNumBathrooms] = useState<string>('0');

    const [dateRange,setDateRange]  = useState<Range>(initialDateRange);

    //
    const router = useRouter();

     //handle search function
     const closeAndSearch = () =>{
        
        const newSearchQuery:SearchQueryType={
             country:country?.label,
             checkIn:dateRange?.startDate,
             checkOut:dateRange?.endDate,
             guests:parseInt(numGuests),
             bedrooms:parseInt(Numbedrooms),
             bathrooms:parseInt(Numbathrooms),
             category:""

        }
        searchModal.setQuery(newSearchQuery);
        searchModal.close();
        router.push("/");   
        
    }
    //set date range
    const _setDateRange = (selection:Range) => {
        if(searchModal.step === 'checkin'){
            searchModal.open('checkout');
        }else if (searchModal.step === 'checkout'){
            searchModal.open('details')
        }

        setDateRange(selection);
    }

   //location content
    const contentLocation = (
        <>
        <h2 className="mb-6 text-2xl"> Where do you wanna rent ? </h2>
        <SelectCountry  value={country}  onChange={(value)=>setCountry(value as SelectCountryValue)}/>
            <div className="mt-6 flex flex-row gap-4 font-semibold">
                <CustomButton label="Check in date" icon={<FaArrowRightLong  />} onClick={()=>searchModal.open('checkin')} type="button" />
                    
            </div>
        </>
    )

    //checkin content
    const checkinContent = (
        <>
        <h2 className="mb-6 text-2xl">When do you want to check in ? </h2>
        <DatePicker 
        value={dateRange} 
        onChange={(value)=>_setDateRange(value.selection)} />
        <div className="mt-6 flex flex-row gap-4">
      
                <CustomButton  className="bg-black text-white  hover:bg-black hover:bg-black/80"  label="Go back" onClick={()=>searchModal.open('location')} type="button" />
                <CustomButton icon={<FaArrowRightLong />} label="Check out date" onClick={()=>searchModal.open('checkout')} type="button" />
            </div>
        </>
    )
    //checkout content
    const checkoutContent = (
        <>
        <h2 className="mb-6 text-2xl">When do you want to check out ? </h2>
        <DatePicker 
        value={dateRange} 
        onChange={(value)=>_setDateRange(value.selection)} />
        <div className="mt-6 flex flex-row gap-4">
                <CustomButton  className="bg-black text-white  hover:bg-black hover:bg-black/80" label="Go back" onClick={()=>searchModal.open('checkin')} type="button" />
                <CustomButton label="Details" icon={<FaArrowRightLong />} onClick={()=>searchModal.open('details')} type="button" />
            </div>
        </>
    )
    //contentDetails
    const contentDetails = (
        <>
        <h2 className="mb-6 text-2xl"> Details </h2>
        <div className="mb-6 space-y-4">
            <div className="space-y-4">
                <label>Number of guests</label>
                <input type="number" 
                min="1"
                value={numGuests}
                 className="w-full h-14 px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-accent"
                 placeholder="Number of guests"
                onChange={(e)=>setNumGuests(e.target.value)} />
            </div>
            <div className="space-y-4">
                <label>Number of bedrooms</label>
                <input type="number" 
                min="1"
                 value={Numbedrooms}
                 className="w-full h-14 px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-accent"
                 placeholder="Number of guests"
                onChange={(e)=>setNumBedrooms(e.target.value)} />
            </div>
            <div className="space-y-4">
                <label>Number of bathrooms</label>
                <input type="number" 
                min="1"
                 value={Numbathrooms}
                 className="w-full h-14 px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-accent"
                 placeholder="Number of guests"
                onChange={(e)=>setNumBathrooms(e.target.value)} />
            </div>
        </div>
            <div className="mt-6 flex flex-row gap-4">
                <CustomButton className="bg-black text-white  hover:bg-black hover:bg-black/80" label="Go back" onClick={()=>searchModal.open('checkin')} type="button" />
                <CustomButton label="Search" onClick={closeAndSearch} type="button" icon={<IoSearchOutline size={25}/>} />
            </div>
        </>
    )
    let content =(
        <>
        </>
    )
    //checking the steps of the filters
    if(searchModal.step === "location"){
        content = contentLocation;
    }
    else if(searchModal.step === "checkin"){
         content = checkinContent
    }
    else if(searchModal.step === "checkout"){
        content = checkoutContent
    }else if(searchModal.step === "details"){
        content = contentDetails;
    }
   
  return (
   <Modal close={searchModal.close} isOpen={searchModal.isOpen} label="Search" content={content} />
  )
}

export default SearchModal;