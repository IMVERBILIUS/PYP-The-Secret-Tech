import React, {Component} from "react";
import Hero from "../../Component_2/Hero";
import Feature from "../../Component_2/Feature";
import landingPage from "../../json/LandingPage.json";




export default class Investasi extends Component {
    render() {
      return (
        <div>
          <Hero/>
          <Feature
            refUvest={this.refUvest}
            data={landingPage.uvest}
          />
          
        </div>
      );
    }
  }