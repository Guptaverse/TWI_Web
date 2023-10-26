import React, { useState, useEffect } from 'react';
import './Venues.css';
import venuesData from '../../Assets/Data/Data';

const Venues = () => {
  const [images, setImages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const venuesPerPage = 4; 

  useEffect(() => {
    const imagePromises = venuesData.map((venue) => {
      return import(`../../Assets/Card-images/Type2/${venue.image}`).then((image) => ({
        id: venue.id,
        src: image.default,
      }));
    });

    Promise.all(imagePromises).then((loadedImages) => {
      const imageMap = loadedImages.reduce((acc, image) => {
        acc[image.id] = image.src;
        return acc;
      }, {});
      setImages(imageMap);
    });
  }, []);

  const indexOfLastVenue = currentPage * venuesPerPage;
  const indexOfFirstVenue = indexOfLastVenue - venuesPerPage;
  const currentVenues = venuesData.slice(indexOfFirstVenue, indexOfLastVenue);

  const totalVenues = venuesData.length;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='venues-parent-container'>
      <h3>Book Venues</h3>
      <div className="venues-container">
        {currentVenues.map((venue) => (
          <div key={venue.id} className="venue-card">
            <img src={images[venue.id]} alt={venue.name} />
            <div className='venue-details'>
              <h2>{venue.name}</h2>
              <p>{venue.description}</p>
              <p>Rating: {venue.rating}</p>
              <p>Price: {venue.price}</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}> &lt; </button>
        <span>{currentPage} of {Math.ceil(totalVenues / venuesPerPage)}</span>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(totalVenues / venuesPerPage)}> &gt; </button>
      </div>
    </div>
  );
};

export default Venues;
