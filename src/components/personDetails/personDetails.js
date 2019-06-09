import React, {Component} from "react";
import "./personDetails.css";
import Spinner from "../spinner"
import SwapiService from "../../services/swapiService.js"

export default class PersonDetails extends Component{

    state = {
        person : null
    }

    swapiService = new SwapiService();


    componentDidMount(){
        this.updatePerson();
    }

    updatePerson = () => {
        const {personId} = this.props;

        if(!personId){
            return;
        }

        this.swapiService.getPerson(personId)
                            .then( person => this.setState({
                                person
                            }) )
    }

    componentDidUpdate(prevProps){
        if(this.props.personId !== prevProps.personId){
            // const {selectedPerson} = this.props;
            // console.log(selectedPerson);
            // this.updatePerson(selectedPerson);
            this.updatePerson()
        }
    }

    
    render(){
        const {person} = this.state;

        if(!person){
            return <span>Choose a character</span>
        }

        return(
            <div className="personDetails d-flex">
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
                    height="200px"
                    alt={person.name}
                />
                <div className="personInfo d-flex">
                    <h3>{person.name}</h3>
                    <ul className="list-group">
                        <li className="list-group-item">{`Gender: ${person.gender}`}</li>
                        <li className="list-group-item">{`Birth year: ${person.birthYear}`}</li>
                        <li className="list-group-item">{`Eye color: ${person.eyeColor}`}</li>
                    </ul>
                </div>
            </div>
        )
    }    
}