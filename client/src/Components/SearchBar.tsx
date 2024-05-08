import React from 'react'
import { FaSearch } from 'react-icons/fa'
import  "./SearchBar.css"

export const SearchBar = () => {
  return (
    <div className="searchbar-wrapper">
      <FaSearch id='search-icon' />
      <input
          type="text"
          placeholder="Type to search"
          //value={search}
          //onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  )
}

export default SearchBar;




