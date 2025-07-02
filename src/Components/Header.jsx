import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <header>
        <div className="head">
          <Router>
            

   <Link to={"/"} className="home-link">
            <div className="logo">
            <img src="https://i.pinimg.com/736x/0d/0f/35/0d0f35dc31abc4fbd251c8edac712f31.jpg" width={50} alt="" />
            <h1>Mpuza</h1>
            </div>
   </Link>{" "}

            <div className="buttons">
               <Link to={"/login"}> <button>Injira</button></Link>
               <Link to={"/register"}> <button>Kwiyandikisha</button></Link>
            </div>
            
          </Router>
        </div>
      
    </header>
  );
}
export default Header;
