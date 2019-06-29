import React, {Component} from "react";
import "./itemList.css";
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
