import ReservationSideBar from "@/components/properties/ReservationSideBar"
import Image from "next/image"

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 mt-4 pb-6">
      <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
      <Image fill src="/estate/first.png" className="object-cover w-full h-full" alt="Vill" />
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Property details */}
        <div className="py-6 pr-6 col-span-3">
         <h1 className="mb-4 text-4xl">Property name</h1>
         <span className="mb-6 block text-lg text-gray-600">5 Guests- 2 Bedrooms - 1 Bathroom</span>
         <hr/>
         <div className="py-6 flex items-center space-x-4">
          <Image src="/profilepic.jpg" alt="Profile picture" width={1500} height={1500} className="rounded-full object-cover w-12 h-12" />
          <p><strong>Estrella </strong>is your host</p>
         </div>
         <hr />
         <p className="mt-6 text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, blanditiis nulla quod excepturi incidunt quo dolore suscipit, earum reprehenderit hic sequi! Vitae reprehenderit natus mollitia hic quaerat molestias nemo rerum?</p>
        </div>
        {/* RESERVATION */}
        <ReservationSideBar />
      </div>
    </main>
  )
}

export default PropertyDetailPage