import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../nav.css";





const Navbar = () => {
    return <React.Fragment>
    
      <div>
        <nav className="mobile-nav">
        
              <Link to="/">
                <img src="foto/Home.png" alt=""></img>
              </Link>
              <Link to="/invest">
                <img src="foto/uvest.png" alt=""></img>
              </Link>
              <Link to="/users">
                <img src="foto/User.png" alt=""></img>
              </Link>
        </nav>
      </div>
    
    


        
    </React.Fragment>
};
export default Navbar;