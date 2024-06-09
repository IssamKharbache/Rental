import PropertyList from "@/components/properties/PropertyList";
import { getUserId } from "@/utils/actions";

const MyPropertiesPage = async () => {
  const userId = await getUserId();
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 ">
        <h1 className="mt-6 mb-6 text-2xl font-semibold">My properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <PropertyList landhostId={userId} />
          </div>
        </main>

  )
}

export default MyPropertiesPage;