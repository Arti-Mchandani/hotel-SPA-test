import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import hotelsData from '../../api/hotel.json';
import { HotelCard } from '../Components/HotelCard';
import { Loader } from '../Components/Loader';

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching data from Hotel.json with delay of 1sec to show the loader 
  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setHotels(hotelsData);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <div className='p-5'>
      {loading ? (
        // Show spinner with message
        <Loader message={'Loading Hotels'} />
      ) : (
        // Show Hotel cards when loading is complete
        <div className='flex flex-wrap gap-5 justify-center'>
          {hotels.map((hotel) => (
            <NavLink
              to={`/hotels/${hotel.id}`}
              key={hotel.id}>
              <HotelCard hotel={hotel} />
            </NavLink>

          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
