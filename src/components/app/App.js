import React, {Component} from 'react';
import "../../reset.css"
import "../../bootstrap.css"
import './App.css';
import Header from "../header/header.js"
import RandomPlanet from "../randomPlanet/randomPlanet.js"
import ErrorBoundry from "../errorBoundry"
import PeoplePage from "../peoplePage"
import SwapiService from "../../services/swapiService.js"
import OfflineSwapiService from "../../services/offlineSwapiService.js"
import {SwapiServiceProvider} from "../swapiServiceContext"

export default class App extends Component {
  
  state = {
    hasError : false
  }

  swapiService = new SwapiService();
  offlineSwapiService = new OfflineSwapiService();

  render(){
      // console.log(this.offlineSwapiService.getAllPeople());
    return (
      // <SwapiServiceProvider value={this.offlineSwapiService}>
        <div className="App">
          <Header />
          <RandomPlanet />
          <PeoplePage
            getItem={id => this.offlineSwapiService.getPerson(id)}
            getImageUrl={id => this.offlineSwapiService.getPersonImage(id)}
            // getItem={id => this.swapiService.getPerson(id)}
            // getImageUrl={id => this.swapiService.getPersonImage(id)}
          />
        </div>
      // </SwapiServiceProvider>
    );
  } 
}