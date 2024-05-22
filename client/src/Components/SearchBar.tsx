import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import api from '../api/loginApi';
import "./SearchBar.css";

export const SearchBar: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = async () => {

    
    try {
      const response = await api.get('api/properties/properties-search', {
        params: {
          search: search
        }
      });
      
      console.log(response.data);

      navigate("/properties-search", { state: { searchData: response.data } });

    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="searchbar-wrapper">
      <FaSearch id='search-icon' onClick={handleSearch} />
      <input
        type="text"
        placeholder="Type to search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
