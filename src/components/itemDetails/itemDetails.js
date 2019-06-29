import React, {Component, Children} from "react";
import "./itemDetails.css";
import Spinner from "../spinner"

export default class ItemDetails extends Component{

    state = {
        item : null,
        loading: false,
        image : null
    }


    //TODO: Pass getItem function through props
    //TODO: Pass image source
    //TODO: Do smth about displaying info from different sources
    //TODO:

    componentDidMount(){
        this.updatePerson();
    }
    
    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId){
           this.onPersonChange(); 
        }
    }

    onPersonChange = () => {
        this.setState({
            loading : true
        }, () => this.updatePerson() )
    }
    
    updatePerson = () => {
        const {itemId, getItem, getImageUrl} = this.props;

        if(!itemId){
            return;
        }

        getItem(itemId).then(item =>
          this.setState({
            item,
            loading: false,
            image : getImageUrl(itemId)
          })
        );
    }

    render(){
        const {item, loading, image} = this.state;

        if(!item && !loading){
            return <span>Choose a character</span>
        }

        if(loading){
            return <Spinner/>
        }

        return(
            <div className="personDetails d-flex">
                <img
                    src={image}
                    height="200px"
                    alt={item.name}
                />
                <div className="personInfo card-body d-flex">
                    <h3>{item.name}</h3>
                    <ul className="list-group">
                        {/* <li>{`Gender: ${item.gender}`}</li> */}
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item})
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }    
}

const Field = ({label, value, item}) =>{
    return(
        <li className="list-group-item">
            {`${label}: ${item[value]}`}
            
            {/* <span className="term">{`${label}: `}</span>
            <span>{`${value}`}</span> */}
        </li>
    )
}

export {Field}