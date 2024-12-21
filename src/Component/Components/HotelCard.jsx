

export const HotelCard = ({hotel}) => {
  return (
    <div
    key={hotel.id}
    className='border rounded-lg w-[300px] p-5 '
    style={{              
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}
  >
    <img
      src={hotel.imageUrl}
      alt={hotel.name}
      className='w-full h-[200px] rounded-lg'
     
    />
    <div className='h-[204px]'>
    <h2 className='text-xl my-2'>{hotel.name}</h2>
    <p>
      <strong>Location:</strong> {hotel.location}
    </p>
    <p>
      <strong>Rating:</strong> {hotel.rating} ⭐
    </p>
    <p>
      <strong>Dates:</strong> {hotel.datesOfTravel[0]} to {hotel.datesOfTravel[1]}
    </p>
    <p>
      <strong>Board Basis:</strong> {hotel.boardBasis}
    </p>
    <h3> <strong>Rooms: </strong></h3>
    <ul>
      {hotel.rooms.map((room, index) => (
        <li key={index}>
          {room.roomType}: {room.amount} available
        </li>
      ))}
    </ul>
    </div>
  </div> 
  )
}
