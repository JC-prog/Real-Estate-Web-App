import React, { useEffect, useState } from 'react';
import "./Sell.css";


const SellPage:React.FC = () => {
    return (
      <>
        <div className="container">
          <h3 className='Title'> What do you want to do?</h3>
          <button>Create Listing</button>
          <button>Rate Agent</button>
          <button>Review Agent</button>
        </div>

        <div className='content'>
          <h2>Some content here</h2>
        </div>
      </>
    );
};
  
export default SellPage;