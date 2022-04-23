import React from "react";
import "../css/course.css";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  CCarousel,
  CCarouselItem,

} from '@coreui/react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import VueImg from '../foto/kras.png'


const Feature = (props) => {
    return <React.Fragment>
    <div className="LP">
    
            <div className="TY">

                        <div className="AT">
                            <h2>uCourse</h2>
                        </div>
                        <div className="SA1">

                            <input
                            type="text"
                            className="SA"
                            placeholder="Search uCourse"/>
                        </div>
            </div>

            <div className="main1">
                        <div className="containerbox3">
                                <h4>Video</h4>
                                <h5>See More</h5>
                        </div>
                    </div>
                    

                    <div className="main1">
                        <div className="containerbox3">

                        <CCarousel controls>
                            <CCarouselItem>
                            <Link  to="/class">
                            <img className="d-block w-40" src={VueImg} alt="slide 1" />
                            </Link>
                            </CCarouselItem>
                            <CCarouselItem>
                            <Link  to="/class">
                            <img className="d-block w-40" src={VueImg} alt="slide 2" />
                            </Link>
                            </CCarouselItem>
                            <CCarouselItem>
                            <Link  to="/class">
                            <img className="d-block h-100" src={VueImg} alt="slide 3" />
                            </Link>
                            </CCarouselItem>
                        </CCarousel>
                        </div>
                        
                    </div>


</div>





        
    </React.Fragment>
};


export default Feature;