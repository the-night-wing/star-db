import React, {Component} from "react";
import "./randomPlanet.css";
import SwapiService from "../../services/swapiService.js"
import Spinner from "../spinner"
import ErrorIndicator from "../errorIndicator/errorIndicator.js"

export default class RandomPlanet extends Component{

    swapiService = new SwapiService();

    state = {
        planet : {},
        allPlanets : [],
        loading : true,
        error : false
    }

    getAllPlanets = () => {
        this.swapiService.getAllPlanets()
                            .then((body) => {
                            console.log(body)
                            this.setState({
                                allPlanets : body
                            })}
                            )
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading : false})
    } 

    onError = (error) => {
        console.log(error);
        this.setState({
            error : true,
            loading : false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25 + 2 )
        this.swapiService.getPlanet(id)
            .then((planet) => {
                this.onPlanetLoaded(planet)
            })
            .catch((err) => {
                this.onError(err)
            })
    }

    componentDidMount(){
        
        // Promise.all([this.swapiService.getAllPlanets()]).then(
        //     (body) => {
        //         console.log(body)
        //         this.setState({
        //             allPlanets : body
        //         })}
        // )
        this.updatePlanet();
        this.interval = setInterval(() => this.updatePlanet, 5000)


    }

    render(){
        
        // setTimeout(function loop(){
        //              this.updatePlanet();
        //             // setTimeout(loop, 10000)
        //             }, 10000
        //         )

        const {planet, loading, error} = this.state;
        
        const hasData = (!loading) && (!error)       
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetContent  planet={planet}/> : null;
        const errorMessage = error ? <ErrorIndicator error={`404`}/> : null;

        return(
            <div className="randomPlanet d-flex">
                {spinner}
                {content}
                {errorMessage  }
            </div>
        )
    }
}

const PlanetContent = ({planet}) => {

    const {name, population, rotation_period, diameter, id} = planet;

    return(
        <React.Fragment>
            <img 
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    height="200px"
                />
                <div className="planetInfo">
                    <h3>{`${name}`}</h3>
                    <div className="planetDetails">
                        <h6>{`Population ${population}`}</h6>
                        <h6>{`Rotation Period ${rotation_period}`}</h6>
                        <h6>{`Diameter ${diameter}`}</h6>
                    </div>
                </div>
        </React.Fragment>
    )
}