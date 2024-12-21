import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import hotelData from "../../api/hotel.json";
import { Loader } from "../Components/Loader";

const HotelDetail = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // fetching hotel details from the hotel.json file
    const selectedHotel = hotelData.find((hotel) => hotel.id === parseInt(id));

    const delayFetch = setTimeout(() => {
      if (selectedHotel) {
        setHotel(selectedHotel);
      } else {
        setError("Hotel Not Found");
      }
      setLoading(false);
    }, 500);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(delayFetch);
  }, [id]);

  if (loading) {
    return (
      <Loader message={'Loading Hotel Deatils'} />
    );
  }

  if (error) {
    return (
      <div className="text-center mt-14">
        <h2 className="text-red-600">{error}</h2>
        <a href="/hotels" className="text-blue-500 underline hover:text-blue-700">
          Back to Home
        </a>
      </div>
    );
  }
  
// Showing the hotel details
  return (
    <div className="p-3 flex flex-wrap md:flex-row  m-3">
      <img
        src={hotel.imageUrl}
        alt={hotel.name}
        className="w-full aspect-[3/2] md:w-1/2 md:pr-3 h-auto object-cover rounded-lg"
      />
      <div className="hotelInfo text-left p-3 md:w-1/2" >

        <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold mb-1'>{hotel.name}</h1>
        <div>
          <h2 className="text-lg font-medium inline-block">Rating:</h2> {hotel.rating} ⭐
        </div>
        <div>
          <h2 className="text-lg font-medium inline-block">Location:</h2> {hotel.location}
        </div>

        <div>
          <h2 className="text-lg font-medium inline-block">Board Basis:</h2> {hotel.boardBasis}
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-medium my-2 mx-0 underline">Rooms Available</h2>
          <ul>
            {hotel.rooms.map((room, index) => (
              <li key={index} className='my-2 mx-0 text-xl' >
                {room.roomType}: {room.amount} available
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
