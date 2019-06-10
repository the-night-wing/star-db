import React, { Component } from 'react'
import ItemList from "../itemList"
import PersonDetails from "../personDetails"

export class PeoplePage extends Component {

    state={

    }

    render() {
        const {personId, onItemSelected} = this.props;

        return (
            <React.Fragment>
                <ItemList 
                    onItemSelected={onItemSelected}
                />
                <PersonDetails
                    personId={personId}
                />
            </React.Fragment>
        )
    }
}

export default PeoplePage
