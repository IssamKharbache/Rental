import AccessDenied from "@/components/AccessDenied";
import PropertyList from "@/components/properties/PropertyList";
import { getUserId } from "@/utils/actions";

const MyfavoritesPage = async () =>{
    const userId = await getUserId();

    if(!userId){
        return(
         <AccessDenied label="favorites" />
        )
    }
    return(
        <main className="max-w-[1500px] mx-auto px-6 py-12">
            <h1 className="My-6 text-2xl mb-4 font-semibold">My favorites</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <PropertyList  favorites={true} />
          </div>
        </main>
    )
}


export default MyfavoritesPage ;