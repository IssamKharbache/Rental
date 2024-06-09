import ContactButton from "@/components/properties/ContactHostButton";
import PropertyList from "@/components/properties/PropertyList";
import apiRequests from "@/utils/ApiService";
import { getUserId } from "@/utils/actions";
import Image from "next/image";

const LandhostDetailsPage = async ({params}:{params:{id:string}}) => {
  const landhost = await apiRequests.get(`/api/auth/${params.id}`);
  const userId = await getUserId();
 
  
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1  mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
            <Image
              src={landhost.avatar_url}
              quality={80}
              width={2000}
              height={2000}
              alt="landlordpicture"
              className="rounded-full w-[200px] min-h-[265px] object-cover"
            />
            <h1 className="mt-6 text-2xl">{landhost.name}</h1>
            {
              userId != params.id &&   <ContactButton />
            }
          
          </div>
        </aside>
        <div className="col-span-1 md:col-span-3 pl-0 md:pl-6 ">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <PropertyList landhostId={params.id} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandhostDetailsPage;
