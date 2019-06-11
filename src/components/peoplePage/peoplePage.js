import React, { Component } from 'react'
import ItemList from "../itemList"
import PersonDetails from "../personDetails"

export class PeoplePage extends Component {

    state={
        selectedPerson : null
    }

    onPersonSelected = (id) =>{
        console.log(id);
        this.setState({
          selectedPerson : id
        })
      }

    render() {
        // const {personId, onItemSelected} = this.props;
        const {selectedPerson} = this.state;

        return (
            <React.Fragment>
                <ItemList 
                    onItemSelected={(id) => this.onPersonSelected(id)}
                />
                <PersonDetails
                    personId={selectedPerson}
                />
            </React.Fragment>
        )
    }
}

export default PeoplePage
