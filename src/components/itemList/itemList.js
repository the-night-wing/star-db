import React from "react";
import "./itemList.css";

const ItemList = (props) => {  

    const { itemList, onItemSelected, renderItem } = props;

    const items = itemList.map(item => {
        const label = renderItem(item);
        return (
        <li
            className="list-group-item"
            key={item.id}
            onClick={() => onItemSelected(item.id)}
        >
            {label}
        </li>
        );
    });

    return <ul className="itemList list-group">{items}</ul>;
        
}

export default ItemList