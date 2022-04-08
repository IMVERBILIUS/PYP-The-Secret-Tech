import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';

import LandingPage from "./pages/LandingPages/LandingPage"
import "./nav.css";
import Navbar from "./Component/navbar"
import Invest from "./pages/investasi/Investasi";
import Setting from "./pages/Setting/Setting"



export default function App() {
  return (
    <Router>
      <div>


        <Navbar />
    
        <Switch>
          <Route path="/invest">
            <Invest />
          </Route>
          <Route path="/users">
            <Setting />
          </Route>
          <Route path="/" >
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Users() {
  return <h2>Users</h2>;
}
