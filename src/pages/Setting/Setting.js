import React, {Component} from "react";
import Hero from "../../Component_3/Hero";
import Feature from "../../Component_3/Feature";
import landingPage from "../../json/LandingPage.json";



export default class Setting extends Component {
    render() {
      return (
        <div>
          <Hero/>
          <Feature
            refPengaturan={this.refPengaturan}
            data={landingPage.pengaturan}
          />
          
        </div>
      );
    }
  }