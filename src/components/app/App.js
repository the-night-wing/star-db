import React, {Component} from 'react';
import "../../reset.css"
import "../../bootstrap.css"
import './App.css';
import Header from "../header/header.js"
import RandomPlanet from "../randomPlanet/randomPlanet.js"
import ErrorIndicator from "../errorIndicator/errorIndicator.js"
import PeoplePage from "../peoplePage"
import ItemList from "../itemList"
import PersonDetails from "../personDetails"
import SwapiService from "../../services/swapiService.js"
import Row from "../row"

export default class App extends Component {
  
  state = {
    // selectedPerson : null,
    hasError : false
  }

  swapiService = new SwapiService();

  // onPersonSelected = (id) =>{
  //   console.log(id);
  //   this.setState({
  //     selectedPerson : id
  //   })
  // }

  componentDidCatch(){
    this.setState({
      hasError : true
    })
  }

  render(){
    const {hasError} = this.state;

    if(hasError){
      return <ErrorIndicator/>
    }

    return (
      <div className="App">
        <Header/>
        <RandomPlanet/>
        <PeoplePage 
          getData = {this.swapiService.getAllPeople}
          renderItem={({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`}
          // onItemSelected={(id) => this.onPersonSelected(id)}
          // personId={this.state.selectedPerson}
        />
        <div className="row mb2">
          <div className="col-md-6">
                <ItemList
                  getData = {this.swapiService.getAllPlanets}
                  renderItem={({name, diameter}) => `${name} (diameter : ${diameter})`}
                    // onItemSelected={(id) => this.onPersonSelected(id)}
                />
          </div>
          <div className="col-md-6">
                <PersonDetails
                    // personId={selectedPerson}
                />
          </div>
        </div>
        <div className="row mb2">
          <div className="col-md-6">
                <ItemList 
                  getData = {this.swapiService.getAllStarships}
                  renderItem={({name, model}) => `${name} (model : ${model})`}
                    // onItemSelected={(id) => this.onPersonSelected(id)}
                />
          </div>
          <div className="col-md-6">
                <PersonDetails
                    // personId={selectedPerson}
                />
          </div>
        </div>
      </div>
    )
  } 
}