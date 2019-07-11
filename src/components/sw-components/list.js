import ItemList from "../itemList"
import React from 'react'
import withData from "../hoc/withData"
import SwapiService from "../../services/swapiService.js"
import {SwapiServiceConsumer} from "../swapiServiceContext"
import OfflineSwapiService from "../../services/offlineSwapiService.js"

// const {
//     getAllPeople,
//     getAllPlanets,
//     getAllStarships
// } = new SwapiService()

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = new OfflineSwapiService()

// 
//                         

const withRenderItemFunction = (View, renderFunction) => {
    
    return(
        (props) => {
            return <View renderItem={renderFunction} {...props} />
        }
    )
}

const PeopleWithRenderedItems = withRenderItemFunction(
  ItemList,
  ({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`
);

const PlanetsWithRenderedItems = withRenderItemFunction(
    ItemList,
    ({ name, diameter, population }) => `${name} (${diameter} ${population})`
);

const StarshipsWithRenderedItems = withRenderItemFunction(
    ItemList,
    ({ name, length, crew }) => `${name} (${length} ${crew})`
);

// const PeopleList = () => {
//     return(
//         <SwapiServiceConsumer>
//             {
//                 ({getAllPeople}) => {
//                     getAllPeople().then( (data) => console.log(data[0]) )
//                     return(
//                         withData(PeopleWithRenderedItems, getAllPeople)
//                     )
//                 }
//             }
//         </SwapiServiceConsumer>
//     )      
// } 

const PeopleList = withData(PeopleWithRenderedItems, getAllPeople)

const PlanetsList = withData(PlanetsWithRenderedItems, getAllPlanets)

const StarshipsList = withData(StarshipsWithRenderedItems, getAllStarships)

export {
    PeopleList,
    PlanetsList,
    StarshipsList
}