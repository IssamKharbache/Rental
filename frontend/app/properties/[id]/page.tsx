import ReservationSideBar from "@/components/properties/ReservationSideBar"
import Image from "next/image"
import apiRequests from "@/utils/ApiService"
const PropertyDetailPage = async ({params}:{params:{id:string}}) => {
  const property = await apiRequests.get(`/api/properties/${params.id}`)
  const propertyDetail = property.data;
  return (
    <main className="max-w-[1500px] mx-auto px-6 mt-4 pb-6">
      <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
      <Image fill src={propertyDetail.image_url} quality={80} className="object-cover w-full h-full" alt="Vill" />
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Property details */}
        <div className="py-6 pr-6 col-span-3">
         <h1 className="mb-4 text-4xl">{propertyDetail.title}</h1>
         <span className="mb-6 block text-lg text-gray-600">{propertyDetail.guests} Guests- {propertyDetail.bedrooms} Bedrooms - {propertyDetail.bathrooms} Bathroom</span>
         <hr/>
         <div className="py-6 flex items-center space-x-4">
          {
            propertyDetail.landhost.avatar_url && (
              <Image src={propertyDetail.landhost.avatar_url} alt="Profile picture" width={1500} height={1500} className="rounded-full object-cover w-12 h-12" />
            )
          }
         
          <p><strong>{propertyDetail.landhost.name}</strong> is your host</p>
         </div>
         <hr />
         <p className="mt-6 text-lg">{propertyDetail.description}</p>
        </div>
        {/* RESERVATION */}
        <ReservationSideBar  property={propertyDetail} />
      </div>
    </main>
  )
}

export default PropertyDetailPage