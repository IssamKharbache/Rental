import ContactButton from "@/components/properties/ContactHostButton";
import PropertyList from "@/components/properties/PropertyList";
import Image from "next/image";

const LandhostDetailsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1  mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
            <Image
              src="/profilepic.jpg"
              quality={80}
              width={2000}
              height={2000}
              alt="landlordpicture"
              className="rounded-full w-[200px] h-[200px] object-cover"
            />
            <h1 className="mt-6 text-2xl">Name here</h1>
            <ContactButton />
          </div>
        </aside>
        <div className="col-span-1 md:col-span-4 pl-0 md:pl-6 ">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <PropertyList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandhostDetailsPage;
