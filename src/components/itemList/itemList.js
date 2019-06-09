import React, {Component} from "react";
import "./itemList.css";
import SwapiService from "../../services/swapiService.js"
import Spinner from "../spinner"


export default class ItemList extends Component{
    state={
        peopleList : []
    }
    swapiService = new SwapiService();
    
    componentDidMount(){
        this.swapiService.getAllPeople()
                         .then((peopleList) => {
                             this.setState({
                                 peopleList
                             })
                         })
    }

    renderItems(arr){
        return(
            arr.map(
                person => {return(
                    <li 
                        className="list-group-item"
                        key={person.id}
                        onClick={() => this.props.onItemSelected(person.id)}
                    >
                            {person.name}
                    </li>
                )} 
            )
        )
    }

    render(){
        const {peopleList} = this.state;

        if(!peopleList){
            return <Spinner/>
        }
        const people = this.renderItems(peopleList)

        return(
            <ul className="itemList list-group">
                {people}
            </ul>
        )
    }
    
}
