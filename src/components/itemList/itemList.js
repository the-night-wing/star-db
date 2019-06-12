import React, {Component} from "react";
import "./itemList.css";
import SwapiService from "../../services/swapiService.js"
import Spinner from "../spinner"


export default class ItemList extends Component{
    state={
        itemList : []
    }
    
    componentDidMount(){
        const {getData} = this.props

        getData()
                .then((itemList) => {
                    this.setState({
                        itemList
                    })
                })
    }

    renderItems(arr){


        return(
            arr.map(                
                person => {
                    
                    const label = this.props.renderItem(person)
                    return(
                        <li 
                            className="list-group-item"
                            key={person.id}
                            onClick={() => this.props.onItemSelected(person.id)}
                        >
                                {label}
                        </li>
                )} 
            )
        )
    }

    render(){
        const {itemList} = this.state;

        if(!itemList){
            return <Spinner/>
        }
        const items = this.renderItems(itemList)

        return(
            <ul className="itemList list-group">
                {items}
            </ul>
        )
    }
    
}
