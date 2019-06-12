import React, { Component } from 'react'
import ItemList from "../itemList"
import PersonDetails from "../personDetails"
import ErrorIndicator from "../errorIndicator"
import Row from "../row"

export class PeoplePage extends Component {

    state={
        selectedPerson : null,
        hasError : false
    }

    componentDidCatch(){
        this.setState({
            hasError : true
        })
    }

    onPersonSelected = (id) =>{
        console.log(id);
        this.setState({
          selectedPerson : id
        })
      }

    render() {
        // const {personId, onItemSelected} = this.props;
        const {selectedPerson, hasError} = this.state;
        const {getData, renderItem} = this.props;

        if(hasError){
            return <ErrorIndicator/>
        }

        const itemList = <ItemList 
                            getData = {getData}
                            onItemSelected={(id) => this.onPersonSelected(id)}
                            renderItem={renderItem}
                        />
        const personDetails = <PersonDetails
                                    personId={selectedPerson}
                                />

        return (
            <Row 
                left={itemList}
                right={personDetails} 
            />
        )
    }
}

export default PeoplePage
