// Component
import Navbar from "../../Components/Navbar/Navbar"
import  "./Home.css"

const HomePage = () => {
    return (
      <>
        <Navbar />
        <div className="landing-page-contaner">
            <img src="/homepage-apartment.jpg"></img>
        </div>
      </>
    );
  };
  
  export default HomePage;