import React, { Component } from 'react'
import {PeopleList, PeopleDetails} from "../sw-components"
import Row from "../row"
import ErrorBoundry from "../errorBoundry"
import {DetailsField} from "../itemDetails/itemDetails.js"

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
        const {renderItem} = this.props;


        const itemList = 
                        <ErrorBoundry>
                            <PeopleList 
                                onItemSelected={(id) => this.onPersonSelected(id)}
                                renderItem={renderItem}
                            />
                        </ErrorBoundry>
        const personDetails = 
                            <ErrorBoundry>
                                <PeopleDetails
                                    itemId={selectedPerson}
                                >
                                    <DetailsField
                                        label="Gender"
                                        value="gender"
                                    />
                                    <DetailsField
                                        label="Eye Color"
                                        value="eyeColor"
                                    />
                                </PeopleDetails>
                            </ErrorBoundry>
                        

        return (
            <Row 
                left={itemList}
                right={personDetails} 
            />
        )
    }
}
