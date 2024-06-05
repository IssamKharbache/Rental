const ReservationSideBar = () => {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h2 className="mb-5 text-2xl">200$ per night</h2>
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label htmlFor="guests" className="mb-2 block font-bold text-xs">
          Guests
        </label>

        <select id="guests" className="w-full -ml-1 text-sm">
          <option value="1">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <p>$200 * 4 nights</p>
        <p>$800</p>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <p>Rental fee</p>
        <p>$60</p>
      </div>
      <div className="mb-4 flex justify-between items-center font-bold">
        <p>Total</p>
        <p>$860</p>
      </div>
      <div className="w-full mb-6 mt-4 py-6 text-center bg-accent hover:bg-accent-hover rounded-xl transition cursor-pointer ">
        Book
      </div>
    </aside>
  );
};

export default ReservationSideBar;
