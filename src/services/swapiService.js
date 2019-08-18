import { async } from "q";

export default class SwapiService {

    _apiBase = "https://swapi.co/api"
    _imageBase = "https://starwars-visualguide.com/assets/img"

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`
            Couldn't fetch ${url}, recieved ${res.status}
            `)
        }

        return await res.json()
    }

    getData = async (url) => {
        const res = fetch(url);

        return await res.json()
    }

    getPersonData = async () => {
        const res = await this.getData("../../data/people.json")
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPersonData);
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPersonData(person);
    }

    getPersonImage = (id) => {
        return `${this._imageBase}/characters/${id}.jpg`
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanetData);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanetData(planet);
    }

    getPlanetImage = (id) => {
        return `${this._imageBase}/planets/${id}.jpg`
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarshipData);
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarshipData(starship);
    }
    
    getStarshipImage = (id) => {
        return `${this._imageBase}/starships/${id}.jpg`
    }



    _getId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanetData = (planet) => {
        return {
            id : this._getId(planet),
            name : planet.name,
            rotation_period: planet.rotation_period,
            diameter : planet.diameter,
            population : planet.population 
        }
    }

    _transformPersonData = (person) => {
        return {
            id : this._getId(person),
            name : person.name,
            height: person.height,
            mass : person.mass,
            eyeColor : person.eye_color,
            hairColor : person.hair_color,
            gender : person.gender,
            birthYear : person.birth_year,
        }
    }

    _transformStarshipData = (starship) => {
        return {
            id : this._getId(starship),
            name : starship.name,
            model: starship.model,
            manufacturer : starship.manufacturer,
            costInCredits : starship.cost_in_credits,
            length : starship.length,
            crew : starship.crew,
            passengers : starship.passengers, 
            cargo_capacity : starship.cargo_capacity
        }
    }

}