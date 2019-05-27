import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SwapiService from "./swapiService.js"

const swapi = new SwapiService();

Promise.all([swapi.getAllPeople(), swapi.getPerson("2")]).then(([people, person])=>{
    people.forEach((p) => {
        console.log(p.name)
            }
        );
        console.log("--------------------------")
        console.log(person.name);
})

// swapi.getAllPeople()
//                     .then((people) => {
//                         people.forEach((p) => {
//                             console.log(p.name)
//                                 }
//                             )
//                     } )


// swapi.getPerson("2").then((person) => console.log(person.name))

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
