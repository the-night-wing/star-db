import React, {Component} from 'react';
import "../../reset.css"
import "../../bootstrap.css"
import './App.css';
import Header from "../header/header.js"
import RandomPlanet from "../randomPlanet/randomPlanet.js"
import ErrorIndicator from "../errorIndicator/errorIndicator.js"
import PeoplePage from "../peoplePage"

export default class App extends Component {
  
  state = {
    // selectedPerson : null,
    hasError : false
  }

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
          // onItemSelected={(id) => this.onPersonSelected(id)}
          // personId={this.state.selectedPerson}
        />
      </div>
    )
  } 
}