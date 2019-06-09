import React from 'react'
import "./errorIndicator.css"

const ErrorIndicator = ({error}) => {
    return (
        <div className="errorIndicator">  
            <h2>BANG!!!</h2> 
            <span>{`Smth went wrong`}</span>
            <span>{`Error : ${error}`}</span>
        </div>
    )
}

export default ErrorIndicator
