import React from "react";
import "../nav.css";

const Feature = (props) => {
    return <React.Fragment>
           

        {props.data.map((item, index) => {
            return (
                <div ref={props.refInformation} className="main" key={index}>
                
                    <div className="containerbox2">
                        <img src={item.imageUrl} alt=""></img>
                            <h5>{item.title}</h5>
                    </div>
                
        </div>
            );
          })}

      
        
    </React.Fragment>
};


export default Feature;