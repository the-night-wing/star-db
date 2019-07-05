import ItemList from "../itemList"
import withData from "../hoc/withData"
import SwapiService from "../../services/swapiService.js"

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = new SwapiService()

const PeopleList = withData(ItemList, getAllPeople)

const PlanetsList = withData(ItemList, getAllPlanets)

const StarshipsList = withData(ItemList, getAllStarships)

export {
    PeopleList,
    PlanetsList,
    StarshipsList
}