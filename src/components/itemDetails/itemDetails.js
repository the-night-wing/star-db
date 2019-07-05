import React from "react";
import "./itemDetails.css";

const ItemDetails = ({item, image, children}) => {

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
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        </div>
    )  
}

const DetailsField = ({label, value, item}) =>{
    return(
        <li className="list-group-item">
            {`${label}: ${item[value]}`}
            
            {/* <span className="term">{`${label}: `}</span>
            <span>{`${value}`}</span> */}
        </li>
    )
}

export {DetailsField}
export default ItemDetails
