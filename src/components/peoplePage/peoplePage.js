import React, { Component } from 'react'
import ItemList from "../itemList"
import PersonDetails from "../personDetails"
import Row from "../row"
import ErrorBoundry from "../errorBoundry"

export default class PeoplePage extends Component {

    state={
        selectedPerson : null
    }

    onPersonSelected = (id) =>{
        this.setState({
          selectedPerson : id
        })
      }

    render() {
        // const {personId, onItemSelected} = this.props;
        const {selectedPerson} = this.state;
        const {getData, renderItem} = this.props;


        const itemList = 
                        <ErrorBoundry>
                            <ItemList 
                                getData = {getData}
                                onItemSelected={(id) => this.onPersonSelected(id)}
                                renderItem={renderItem}
                            />
                        </ErrorBoundry>
        const personDetails = 
                            <ErrorBoundry>
                                <PersonDetails
                                    personId={selectedPerson}
                                />
                            </ErrorBoundry>
                        

        return (
            <Row 
                left={itemList}
                right={personDetails} 
            />
        )
    }
}
