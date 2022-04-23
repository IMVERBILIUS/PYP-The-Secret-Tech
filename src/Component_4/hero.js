import React from "react";
import "../content.css";
import "../css/course.css"
import {

    CCard,
    CCardBody,
    CCardFooter,
    CCardImage,
    CCardText,
    CCardTitle,
    CCol,
    CRow,
  } from '@coreui/react'




const Hero = () => {
    return <React.Fragment>
    

    <div className="SI">   

                  <div className="main1">
                        <div className="containerbox3">
                                <h4>Artikel</h4>
                                <h5>See More</h5>
                        </div>
                    </div>
                <div className="containerbox3">
                    <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
                        <CCol xs>
                            <CCard>
                            <CCardImage orientation="top" src="../foto/invest3.png" />
                            <CCardBody>
                                <CCardTitle>Investment Plan</CCardTitle>
                                <CCardText>
                                Competency-based curriculum delivers both skills.....
                                </CCardText>
                            </CCardBody>
                            <CCardFooter>
                                <small className="text-medium-emphasis">Learn More</small>
                            </CCardFooter>
                            </CCard>
                        </CCol>
                        <CCol xs>
                            <CCard>
                            <CCardImage orientation="top" src="../foto/invest2.png" />
                            <CCardBody>
                                <CCardTitle>Time To Invest</CCardTitle>
                                <CCardText>
                                So thaw what you’re learning in your courses is immediately
                                </CCardText>
                            </CCardBody>
                            <CCardFooter>
                                <small className="text-medium-emphasis">Learn More</small>
                            </CCardFooter>
                            </CCard>
                        </CCol>
                        <CCol xs>
                            <CCard>
                            <CCardImage orientation="top" src="../foto/sapi123.jpg" />
                            <CCardBody>
                                <CCardTitle>Manage Your Money</CCardTitle>
                                <CCardText>
                                Learn how to manage your money
                                </CCardText>
                            </CCardBody>
                            <CCardFooter>
                                <small className="text-medium-emphasis">Learn More</small>
                            </CCardFooter>
                            </CCard>
                        </CCol>
                        <CCol xs>
                            <CCard>
                            <CCardImage orientation="top" src="../foto/sapi123.jpg"  />
                            <CCardBody>
                                <CCardTitle>How To Invest</CCardTitle>
                                <CCardText>
                                Learn How To Invest your money with right decision.
                                </CCardText>
                            </CCardBody>
                            <CCardFooter>
                                <small className="text-medium-emphasis">Learn More</small>
                            </CCardFooter>
                            </CCard>
                        </CCol>
                        </CRow>
                        </div>
    </div> 
    </React.Fragment>
};

export default Hero;