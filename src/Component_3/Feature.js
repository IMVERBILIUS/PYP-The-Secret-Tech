import React from "react";
import "../setting.css";


const Feature = (props) => {
    return <React.Fragment>


{props.data.map((item, index) => {
            return (
                <div ref={props.refUvest}  key={index}>         
                        <div className="SQ">
                                
                                <div className="SP">
                                <img  src={item.imageUrl} alt="" ></img>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>

                        </div>
                
                
               
            );
          })}



        
    </React.Fragment>
};

export default Feature;