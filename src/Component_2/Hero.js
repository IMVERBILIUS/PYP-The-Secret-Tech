import React from "react";
import "../content.css";


const Hero = () => {
    return <React.Fragment>
    

    <div>
        <div className="atas">

                <h2>uVest</h2>
        </div>
        <div className="tengah">
            <div className="anak_tengah">
                <h3>Portofolio Balance</h3>
                <h4>Rp.1.0000.000</h4>
            </div>
        </div>

        <div className="tengah" >
            <div className="start">
                <h4>Total earning</h4>
                <h5>Rp 100.000</h5>
                
            </div>
            <div className="bawah">
                <h4>Total earning</h4>
                <h5>+5,57%</h5>
                
            </div>
            
        </div>


            
        </div>

        <div className="foto1">
                <img className="gh" src="foto/konten2.png" alt=""></img>
            </div>  
        
    </React.Fragment>
};

export default Hero;