import React, {Component} from "react";
import Hero from "../../Component/Hero";
import Menu from "../../Component/menu";
import Feature from "../../Component/Feature";
import landingPage from "../../json/LandingPage.json";



export default class LandingPage extends Component {
    render() {
      return (
        <div>
          <Hero/>
          <Feature
            refInformation={this.refInformation}
            data={landingPage.information}
          />
          
          <Menu
            refFoto={this.refFoto}
            data={landingPage.foto}
          />

          
        </div>
      );
    }
  }