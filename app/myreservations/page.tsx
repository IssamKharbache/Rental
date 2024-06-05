import Image from "next/image"

const MyReservations = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 ">
        <h1 className="mt-6 mb-6 text-2xl">My reservations</h1>
        <div className="space-y-4">
            <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                <div className="col-span-1">
                    <div className="relative overflow-hidden aspect-square rounded-xl">
                        <Image fill src="/estate/first.png" alt="estate" className="hover:scale-110 object-cover transition w-full h-full" />
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3 space-y-2 flex flex-col justify-between" >
                <h2 className="mb-4 text-xl">Property name</h2>
                   <div className="flex flex-col gap-4">
                    <p className="mb-2"><strong>Checkin date:</strong> 12/4/2024</p>
                    <p className="mb-2"><strong>Checkout date:</strong> 18/4/2024</p> 
                    <p className="mb-2"><strong>Number of nights:</strong> 6</p>
                    <p className="mb-2"><strong>Total price:</strong> $1500</p>
                   </div>
                    <div className="cursor-pointer py-4 px-6 text-center bg-accent rounded-xl hover:bg-accent-hover duration-200">
       Go to property
                    </div>
                </div>
            </div>
            <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                <div className="col-span-1">
                    <div className="relative overflow-hidden aspect-square rounded-xl">
                        <Image fill src="/estate/first.png" alt="estate" className="hover:scale-110 object-cover transition w-full h-full" />
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3 space-y-2 flex flex-col justify-between" >
                <h2 className="mb-4 text-xl">Property name</h2>
                   <div className="flex flex-col gap-4">
                  
                    <p className="mb-2"><strong>Checkin date:</strong> 12/4/2024</p>
                    <p className="mb-2"><strong>Checkout date:</strong> 18/4/2024</p> 
                    <p className="mb-2"><strong>Number of nights:</strong> 6</p>
                    <p className="mb-2"><strong>Total price:</strong> $1500</p>
                   </div>
                    <div className="cursor-pointer py-4 px-6 text-center bg-accent rounded-xl hover:bg-accent-hover duration-200">
       Go to property
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default MyReservations