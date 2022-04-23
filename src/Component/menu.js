import React from "react";
import "../nav.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Menu = (props) => {
    return <React.Fragment>
            
            <div className="main1">
                <div className="containerbox3">
                        <h4>uCourse</h4>


                        <Link to="/Course">
                        <h5>See More</h5>
                        </Link>



                </div>
            </div>
            
        {props.data.map((item, index) => {
            return (
       

                <div ref={props.refMenu}  key={index}>
                    <div className="foto1">
                        <img src={item.imageUrl} alt=""></img>
                    </div>  
                </div>
       
            );
          })}
    
        
    </React.Fragment>
};


function Course() {
    return <h2>Home</h2>;
  }
export default Menu;