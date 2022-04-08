import React from "react";
import "../nav.css";

const Menu = (props) => {
    return <React.Fragment>
            
            <div className="main1">
                <div className="containerbox3">
                        <h4>uCourse</h4>
                        <h5>See More</h5>
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


export default Menu;