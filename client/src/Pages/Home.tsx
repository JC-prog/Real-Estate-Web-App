// Component
import Navbar, { SearchBar } from "../Components/SearchBar"
import  "./Home.css"

const HomePage = () => {
    return (
      <>
        <div className='home-img-container'>
          <img src='./living-room.jpg' />
          <div className='home-landing-container'>
            <div className='home-landing-title'>
              <h2>Find your next home</h2>
            </div>
            <div className='home-search-bar'>
              <SearchBar />
            </div>
          </div>
          
        </div>
      </>
    );
  };
  
  export default HomePage;