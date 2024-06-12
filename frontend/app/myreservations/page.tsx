import Image from "next/image";
import apiRequests from "@/utils/ApiService";
import Link from "next/link";

const MyReservationsPage = async () => {
  const reservations = await apiRequests.get("/api/auth/myreservations/");
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 ">
      <h1 className="mt-6 mb-6 text-2xl font-semibold">My reservations</h1>
      <div className="space-y-4">
        {reservations.map((reservation: any, idx: number) => {
          return (
            <div
              key={idx}
              className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl"
            >
              <div className="col-span-1">
                <div className="relative overflow-hidden aspect-square rounded-xl">
                  <Image
                    fill
                    src={reservation.property.image_url}
                    alt="estate"
                    className="hover:scale-110 object-cover transition w-full h-full"
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-3 space-y-2 flex flex-col justify-between">
                <h2 className="mb-4 text-xl">{reservation.property.title}</h2>
                <div className="flex flex-col gap-4">
                  <p className="mb-2">
                    <strong>Checkin date:</strong> {reservation.start_date}
                  </p>
                  <p className="mb-2">
                    <strong>Checkout date: </strong>
                    {reservation.end_date}
                  </p>
                  <p className="mb-2">
                    <strong>Number of nights:</strong>{" "}
                    {reservation.number_of_nights}
                  </p>
                  <p className="mb-2">
                    <strong>Total price:</strong> ${reservation.total_price}
                  </p>
                </div>
                <Link
                  href={`/properties/${reservation.property.id}`}
                  className="cursor-pointer py-4 px-6 text-center bg-accent rounded-xl hover:bg-accent-hover duration-200 w-full md:max-w-[250px] "
                >
                  Go to property
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default MyReservationsPage;
