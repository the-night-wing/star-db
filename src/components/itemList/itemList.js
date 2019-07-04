import React, {Component} from "react";
import "./itemList.css";
import SwapiService from "../../services/swapiService.js"
import withData from "../hoc/withData"

class ItemList extends Component{
    
    renderItems(arr){

        return(
            arr.map(                
                item => {
                    
                    const label = this.props.renderItem(item)
                    return(
                        <li 
                            className="list-group-item"
                            key={item.id}
                            onClick={() => this.props.onItemSelected(item.id)}
                        >
                                {label}
                        </li>
                )} 
            )
        )
    }

    render(){

        const {itemList} = this.props;

        const items = this.renderItems(itemList)

        return(
            <ul className="itemList list-group">
                {items}
            </ul>
        )
    }
    
}

const {getAllPeople} = new SwapiService();

// const {getData} = this.props;

export default withData(ItemList, getAllPeople)