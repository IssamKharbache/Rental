"use client";

import Image from "next/image";
import Modal from "../Modal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import CustomButton from "@/components/forms/CustomButton";
import { ChangeEvent, useState } from "react";
import Categories from "@/components/properties/addproperty/Categories";
import SelectCountry, {
  SelectCountryValue,
} from "@/components/forms/SelectCountry";
//
import apiRequests from "@/utils/ApiService";
import { toast } from "sonner";

import { useRouter } from "next/navigation";

const AddPropertyModal = () => {
  const router = useRouter();
  //
  //states
  const [currentStep, setCurrentStep] = useState(1);
  const [errors,setErrors] = useState<string[]>([]);
  //first step
  const [dataCategory, setDataCategory] = useState("");
  //second step
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  //third step
  const [dataPrice, setDataPrice] = useState("");
  const [dataBedrooms, setDataBedrooms] = useState("");
  const [dataBathrooms, setDataBathrooms] = useState("");
  const [dataGuests, setDataGuests] = useState("");
  // fourth step
  const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
  //last step
  const [dataImage, setDataImage] = useState<File | null>(null);

  //
  const addPropertyModal = useAddPropertyModal();

  //set data
  //set the property image
  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const tempImage = event.target.files[0];
      setDataImage(tempImage);
    }
  };
  //set the category 
  const setCategory = (category: string) => {
    setDataCategory(category);
  };
  //
  //submit function
  const submitForm = async () =>{
    
    if(dataCategory && dataTitle && dataDescription && dataPrice && dataCountry && dataImage){
      const formData = new FormData();
      formData.append('category',dataCategory);
      formData.append('title',dataTitle);
      formData.append('description',dataDescription);
      formData.append('price_per_night',dataPrice);
      formData.append('bedrooms',dataBedrooms);
      formData.append('bathrooms',dataBathrooms);
      formData.append('guests',dataGuests);
      formData.append('country',dataCountry.label);
      formData.append('country_code',dataCountry.value);
      formData.append('image',dataImage);
          
      const res = await apiRequests.post('/api/properties/create/',formData);
      if(res.success){
        addPropertyModal.close();
        router.push('/');
        toast.success("Property created successfully")
      }
      else{
        const tmpErrors: string[] = Object.values(res).map((error:any)=>{
          return error;
        })
        setErrors(tmpErrors);
      }
    }else{
      toast.error("Title, Description, Price, Country and Image fields are required")
    }
  }
  //
  //content
  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className="text-4xl mb-6 text-center  font-semibold">
            Choose category
          </h2>
          <Categories
            dataCategory={dataCategory}
            setCategory={(category) => setCategory(category)}
          />
          <CustomButton
            label="Next"
            onClick={() => setCurrentStep(2)}
            type="button"
            className="mt-6"
          />
        </>
      ) : currentStep == 2 ? (
        <>
          <h2 className="text-4xl mb-6 text-center  font-semibold">
            Descripe your place
          </h2>
          <div className="pb-6 space-y-4">
            {/* TITLE INPUT */}
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Title</label>
              <input
                type="text"
                className="w-full p-4 border border-gray-400 rounded-xl focus:outline-none focus:border-2 focus:border-accent"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
              />
            </div>
            {/* DESCRIPTION INPUT */}
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Description</label>
              <textarea
                className="w-full p-4 border border-gray-400 rounded-xl focus:outline-none focus:border-2 focus:border-accent h-[150px]"
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
              />
            </div>
          </div>
          <CustomButton
            label="Previous"
            onClick={() => setCurrentStep(1)}
            type="button"
            className="bg-black  text-white hover:bg-black hover:opacity-80"
          />
          <CustomButton
            label="Next"
            onClick={() => setCurrentStep(3)}
            type="button"
            className="mt-2"
          />
        </>
      ) : currentStep == 3 ? (
        <>
          <h2 className="text-4xl mb-6 text-center  font-semibold">Details</h2>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Price per night</label>
              <input
                type="number"
                className="w-full p-4 border border-gray-400 rounded-xl focus:outline-none focus:border-2 focus:border-accent"
                value={dataPrice}
                min={0}
                onChange={(e) => setDataPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Bedrooms</label>
              <input
                type="number"
                className="w-full p-4 border border-gray-400 rounded-xl focus:outline-none focus:border-2 focus:border-accent"
                value={dataBedrooms}
                min={0}
                onChange={(e) => setDataBedrooms(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Bathrooms</label>
              <input
                type="number"
                className="w-full p-4 border border-gray-400 rounded-xl focus:outline-none focus:border-2 focus:border-accent"
                value={dataBathrooms}
                min={0}
                onChange={(e) => setDataBathrooms(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Number of Guests</label>
              <input
                type="number"
                className="w-full p-4 border border-gray-400 rounded-xl focus:outline-none focus:border-2 focus:border-accent"
                value={dataGuests}
                min={0}
                onChange={(e) => setDataGuests(e.target.value)}
              />
            </div>
          </div>

          <CustomButton
            label="Previous"
            onClick={() => setCurrentStep(2)}
            type="button"
            className="bg-black  text-white hover:bg-black hover:opacity-80"
          />
          <CustomButton
            label="Next"
            onClick={() => setCurrentStep(4)}
            type="button"
            className="mt-4"
          />
        </>
      ) : currentStep == 4 ? (
        <div className="space-y-4">
          <h2 className="text-4xl mb-6 text-center  font-semibold">
            Choose location
          </h2>
          <div className="pt-3 pb-6 space-y-4">
            <SelectCountry
              onChange={(value) => setDataCountry(value as SelectCountryValue)}
              value={dataCountry}
            />
          </div>
          <CustomButton
            label="Previous"
            onClick={() => setCurrentStep(3)}
            type="button"
            className="bg-black  text-white hover:bg-black hover:opacity-80"
          />
          <CustomButton
            label="Next"
            onClick={() => setCurrentStep(5)}
            type="button"
            className="mt-4"
          />
        </div>
      ) : (
        <>
          <h2 className="text-4xl mb-6 text-center  font-semibold">Property Image</h2>
          <div className="pt-3 pb-6 space-y-4">
            <div className="py-4 px-6 bg-gray-400 text-white rounded-xl">
              <input type="file" accept="image/*" onChange={setImage} className=" font-semibold text-black"  />
            </div>
            {dataImage && (
              <div className="w-[200px] h-[150px] relative">
                <Image
                  fill
                  alt="UPLOADED IMAGE"
                  src={URL.createObjectURL(dataImage)}
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            )}
          </div>
          {errors && errors.map((error,idx)=>{
            return(
              <div key={idx} className="p-5 mb-4 bg-red-500 text-white opacity-80">
                {error}
              </div>
            )
          })}
          <CustomButton
            label="Previous"
            onClick={() => setCurrentStep(4)}
            type="button"
            className="bg-black  text-white hover:bg-black hover:opacity-80"
          />
          <CustomButton
            label="Submit"
            onClick={submitForm}
            type="button"
            className="mt-4"
          />
        </>
      )}
    </>
  );
 
  return (
    <div>
      {}
      <Modal
        isOpen={addPropertyModal.isOpen}
        close={addPropertyModal.close}
        content={content}
        label="Add property"
      />
    </div>
  );
};

export default AddPropertyModal;
