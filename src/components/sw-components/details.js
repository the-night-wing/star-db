import ItemDetails from "../itemDetails"
import SwapiService from "../../services/swapiService.js"
import withDetails from "../hoc/withDetails"

const { getPerson,
        getPersonImage,
        getStarship,
        getStarshipImage,
        getPlanet,
        getPlanetImage
} = new SwapiService();

const PeopleDetails = withDetails(ItemDetails, getPerson, getPersonImage)

const PlanetsDetails = withDetails(ItemDetails, getPlanet, getPlanetImage)

const StarshipsDetails = withDetails(ItemDetails, getStarship, getStarshipImage)

export {
    PeopleDetails,
    PlanetsDetails,
    StarshipsDetails
}