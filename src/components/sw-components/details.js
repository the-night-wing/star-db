import React from 'react'
import ItemDetails from "../itemDetails"
import withDetails from "../hoc/withDetails"
import {SwapiServiceConsumer} from "../swapiServiceContext"
import SwapiService from '../../services/swapiService.js'
import OfflineSwapiService from "../../services/offlineSwapiService.js"

const {
    getPerson, getPersonImage,
    getPlanet, getPlanetImage,
    getStarship, getStarshipImage
} = new OfflineSwapiService()


// const PeopleDetails = () => {
//     return(
//         <SwapiServiceConsumer>
//             {
//                 ({getPerson, getPersonImage}) => {
//                 return(
//                     withDetails(ItemDetails, getPerson, getPersonImage)
//                 )
//                 }
//             }
//         </SwapiServiceConsumer>
//     )
// }

// const PeopleDetails = 
//     <SwapiServiceConsumer>
//         {
//             ({getPerson, getPersonImage}) => {
//             return(
//                 withDetails(ItemDetails, getPerson, getPersonImage)
//             )
//             }
//         }
//     </SwapiServiceConsumer>

const PeopleDetails = 

                withDetails(ItemDetails, getPerson, getPersonImage)

const PlanetsDetails = 

                    withDetails(ItemDetails, getPlanet, getPlanetImage)

const StarshipsDetails =

                    withDetails(ItemDetails, getStarship, getStarshipImage)

export {
    PeopleDetails,
    PlanetsDetails,
    StarshipsDetails
}