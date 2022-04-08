import React from "react";
import "../content.css";

const Feature = (props) => {
    return <React.Fragment>
                <div className="atas">
                    <h2>uVest</h2>
                </div>
        {props.data.map((item, index) => {
            return (
                <div ref={props.refUvest}  key={index}>
                
                    {/* <div className="containerbox2">
                        <img src={item.imageUrl} alt=""></img>
                            <h5>{item.title}</h5>
                    </div> */}
                    
                    <div className="foto2">
                        <img  src={item.imageUrl}  alt="" ></img>
                    </div>  
                    <div className="label4">
                        
                        <div className="label2">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                
                
        </div>
            );
          })}


        
    </React.Fragment>
};


export default Feature;