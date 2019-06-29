import React, { Component } from 'react'
import ItemList from "../itemList"
import ItemDetails from "../itemDetails"
import Row from "../row"
import ErrorBoundry from "../errorBoundry"
import {Field} from "../itemDetails/itemDetails.js"

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
        const {getData, renderItem, getItems, getImageUrl} = this.props;


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
                                <ItemDetails
                                    itemId={selectedPerson}
                                    getItem={getItem}
                                    getImageUrl={getImageUrl}
                                >
                                    <Field
                                        label="Gender"
                                        value="gender"
                                    />
                                    <Field
                                        label="Eye Color"
                                        value="eyeColor"
                                    />
                                </ItemDetails>
                            </ErrorBoundry>
                        

        return (
            <Row 
                left={itemList}
                right={personDetails} 
            />
        )
    }
}
