import React from "react";
import "./personDetails.css";

function PersonDetails(){
    return(
        <div className="personDetails d-flex">
            <img
                // src="https://cdn.vox-cdn.com/thumbor/YP3HK6voEMeWojSG9aGdJQMYlYY=/0x0:1300x650/1200x800/filters:focal(537x203:745x411)/cdn.vox-cdn.com/uploads/chorus_image/image/56242795/Obi_Wan.0.jpg"
                src={require("../../obi_wan.jpg")}
                height="200px"
                alt="Obi Wan"
            />
            <div className="personInfo d-flex">
                <h3>Obi Wan Kenobi</h3>
                <ul className="list-group">
                    <li className="list-group-item">Gender: Male</li>
                    <li className="list-group-item">Birth year: 45</li>
                    <li className="list-group-item">Eye color: green </li>
                </ul>
            </div>
        </div>
    )
}

export default PersonDetails