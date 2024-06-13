"use client";
import useAddPropertyModal from '@/app/hooks/useAddPropertyModal';
import useLoginModal from '@/app/hooks/useLoginModal';

interface PropertyButton {
  userId: string | null
}
const AddPropertyButton:React.FC <PropertyButton> = ({userId}) => {
  const addPropertyModal = useAddPropertyModal();
  const loginModal = useLoginModal();

  const rentalYourHome =  () =>{
    addPropertyModal.open();
  }
  return (
    <div onClick={userId ? rentalYourHome:loginModal.open} className='p-2 text-sm font-semibold rounded-full hover:bg-gray-200 duration-200 cursor-pointer'>
       Be a rental
      </div>
  )
}

export default AddPropertyButton;