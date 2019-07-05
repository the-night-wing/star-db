import React, { Component } from 'react'

import ErrorIndicator from "../../errorIndicator"
import Spinner from "../../spinner"

const withDetails = (View, getItem, getImageUrl) => {
    return(
        class extends Component {

            state = {
                item : null,
                loading: false,
                image : null
            }

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
                const {itemId} = this.props;
        
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
                    <View item={item} image={image} {...this.props}/>
                )
            }
        }
    )
}

export default withDetails