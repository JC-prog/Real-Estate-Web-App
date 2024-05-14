import React from 'react'

import './ListingCard.css'

const ListingCard = () => {
  return (
    <div className='listing-div-wrapper'>
        <div className="listing-image-wrapper">
            <img src='./placeholder-image.jpg'/>
        </div>
        <div className="description-div">
            <h2>Property Name</h2>
            <p>Address</p>
            <p>1 Room</p>
            <p>1 Bathrooms</p>
            <p>Condo</p>
        </div>
    </div>
  )
}

export default ListingCard;