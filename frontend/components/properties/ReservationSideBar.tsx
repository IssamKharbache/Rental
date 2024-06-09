'use client'

import { useState,useEffect } from "react";
import {Range} from 'react-date-range';
import apiRequests from "@/utils/ApiService";
import useLoginModal from "@/app/hooks/useLoginModal";
import { differenceInDays ,eachDayOfInterval,format} from "date-fns";
import DatePicker from "../forms/Calendar";
import { toast } from "sonner";
import LoadingSpinner from "../LoadingSpinner";
import { useRouter } from "next/navigation";


const initialDateRange = {
  startDate:new Date(),
  endDate: new Date(),
  key:'selection'
}
export type Property ={
  id:string,
  price_per_night:number,
  guests:number
}

interface  ReservationSideBarProps {
  userId:string | null;
  property:Property;
}

const ReservationSideBar:React.FC<ReservationSideBarProps> = ({property,userId}) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  //states
  const [loading,setLoading] = useState(false);
  const [fee,setFee] = useState<number>(0);
  const [bookedDates,setBookedDates] = useState<Date[]>([]);
  const [nights,setNights] = useState<number>(0);
  const [totalPrice,setTotalPrice] = useState<number>(0);
  const [dateRange,setDateRange] = useState<Range>(initialDateRange);
  const [guests,setGuests] = useState<string>('1')
  const guestRange = Array.from({length:property.guests},(_,index)=>index+1)

  
  //book a property function
  const performBooking = async  () =>{
    setLoading(true);
    if(userId){
      if(dateRange.startDate && dateRange.endDate){
        const formData = new FormData();
      formData.append('guests',guests);
      formData.append('start_date',format(dateRange.startDate,'yyyy-MM-dd'));
      formData.append('end_date',format(dateRange.endDate,'yyyy-MM-dd'));
      formData.append('number_of_nights',nights.toString());
      formData.append('total_price',totalPrice.toString());

      const res = await apiRequests.post(`/api/properties/${property.id}/book/`,formData);

      if(res.success){
        setLoading(false);
        toast.success('Booked successfully')
        router.refresh();
      }else{
        setLoading(false);
        toast.error('Something went wrong')
      }
      }
    }else{
      loginModal.open();
    }
  }
  //get the reservations
  const getReservations = async () =>{
    const reservations = await apiRequests.get(`/api/properties/${property.id}/reservations/`)
    let dates:Date[] = [];
    reservations.forEach((reservation:any)=>{
      const range = eachDayOfInterval({
        start:new Date(reservation.start_date),
        end:new Date(reservation.end_date)
      });
      dates = [...dates,...range];
    })
    
    setBookedDates(dates);
  }
  //
  const _setDateRange = (selection: any) => {
    const newStartDate = new Date(selection.startDate);
    const newEndDate = new Date(selection.endDate);

    if (newEndDate <= newStartDate) {
        newEndDate.setDate(newStartDate.getDate() + 1);
    }

    setDateRange({
        ...dateRange,
        startDate: newStartDate,
        endDate: newEndDate
    })
}
  //
  useEffect(()=>{
    getReservations();
   if(dateRange.startDate && dateRange.endDate){
    const dayCount = differenceInDays(
      dateRange.endDate,
      dateRange.startDate
    );
    if(dayCount && property.price_per_night){
       const _fee = ((dayCount*property.price_per_night)/100) *5  ;
       setFee(_fee);
       setTotalPrice((dayCount* property.price_per_night)+_fee);
       setNights(dayCount)
    }else{
      const _fee = (property.price_per_night/100)*5;
      setFee(_fee);
      setTotalPrice(property.price_per_night + _fee)
      setNights(1);
    }
   }
  },[dateRange])
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h2 className="mb-5 text-2xl">{property.price_per_night}$ per night</h2>
      <div className="flex justify-center">
         <DatePicker bookedDate={bookedDates} onChange={(value)=>_setDateRange(value.selection)}  value={dateRange} />
      </div>
     
      <div  className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label htmlFor="guests" className="mb-2 block font-bold text-xs">
          Guests
        </label>
        <select value={guests} onChange={(e)=>setGuests(e.target.value)} id="guests" className="w-full -ml-1 text-sm">
         {
          guestRange.map((guestsNumber,idx)=>(
            <option key={idx} value={guestsNumber}>{guestsNumber}</option>
          ))
         }
        </select>
      </div>

      <div className="mb-4 flex justify-between items-center">
      
        <p>${property.price_per_night} * {nights} nights</p>
        <p>${property.price_per_night * nights}</p>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <p>Rental fee</p>
        <p>${fee}</p>
      </div>
      <div className="mb-4 flex justify-between items-center font-bold">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
      {
        loading ?<div className="flex  items-center justify-center gap-4 w-full mb-6 mt-4 py-6 text-center bg-accent opacity-60 rounded-xl transition cursor-not-allowed ">
        Booking please wait ...<LoadingSpinner />
      </div> : <div onClick={performBooking} className="w-full mb-6 mt-4 py-6 text-center bg-accent hover:bg-accent-hover rounded-xl transition cursor-pointer ">
        Book
      </div>
      }
     
    </aside>
  );
};

export default ReservationSideBar;
