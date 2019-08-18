// import { async } from "q";

export default class OfflineSwapiService {

    _apiBase = "http://127.0.0.1:8080"
    _imageBase = "http://127.0.0.1:8080"

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`
            Couldn't fetch ${url}, recieved ${res.status}
            `)
        }

        return await res.json()
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people.json`);
        return res.map(this._transformPersonData);
    }

    getPerson = async (id) => {
        const allPeople = await this.getResource(`/people.json`);
        const person = allPeople[id-1]
        return this._transformPersonData(person);
    }

    getPersonImage = (id) => {
        return `${this._imageBase}/volk.png`
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets.json`);
        return res.map(this._transformPlanetData);
    }

    getPlanet = async (id) => {
        const allPlanets = await this.getResource(`/planets.json`);
        const planet = allPlanets[id-1]
        return this._transformPlanetData(planet);
    }

    getPlanetImage = (id) => {
        return `${this._imageBase}/volk.png`
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships.json`);
        return res.map(this._transformStarshipData);
    }

    getStarship = async (id) => {
        const allStarships = await this.getResource(`/starships.json`);
        const starship = allStarships[id-1];
        return this._transformStarshipData(starship);
    }
    
    getStarshipImage = (id) => {
        return `${this._imageBase}/volk.png`
    }


    _getId = (item) => {
        return item["pk"];
    }

    _transformPlanetData = ({fields, pk}) => {
        return {
            id : pk,
            name : fields.name,
            rotation_period: fields.rotation_period,
            diameter : fields.diameter,
            population : fields.population 
        }
    }

    _transformPersonData = ({fields, pk}) => {
        return {
            id : pk,
            name : fields.name,
            height: fields.height,
            mass : fields.mass,
            eyeColor : fields.eye_color,
            hairColor : fields.hair_color,
            gender : fields.gender,
            birthYear : fields.birth_year,
        }
    }

    _transformStarshipData = ({fields, pk}) => {
        return {
            id : pk,
            name : fields.name,
            model: fields.model,
            manufacturer : fields.manufacturer,
            costInCredits : fields.cost_in_credits,
            length : fields.length,
            crew : fields.crew,
            passengers : fields.passengers, 
            cargo_capacity : fields.cargo_capacity
        }
    }

}