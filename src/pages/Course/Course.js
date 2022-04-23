import React, {Component} from "react";
import Hero from "../../Component_4/hero";
import Feature from "../../Component_4/feature";
import landingPage from "../../json/LandingPage.json";




export default class Investasi extends Component {
    render() {
      return (
        <div>
          <Feature
            refUvest={this.refUvest}
            data={landingPage.uvest}
          />
          
          <Hero/>
        </div>
      );
    }
  }