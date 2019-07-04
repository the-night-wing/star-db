import React, { Component } from 'react'

import ErrorIndicator from "../../errorIndicator"
import Spinner from "../../spinner"

const withData = (View, getData) => {
    return class extends Component{
        
        state={
            itemList : []
        }
        
        componentDidMount(){
            
            // const {getData} = this.props;

            getData()
                    .then((itemList) => {
                        this.setState({
                            itemList
                        })
                    })
        }


        render(){

            const {itemList} = this.state;
    
            if(!itemList){
                return <Spinner/>
            }

            return(
                <View itemList={itemList} {...this.props}/>
            )
        }
    }
}

export default withData