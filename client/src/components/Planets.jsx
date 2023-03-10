import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

const Planets = () => {
    const { planetID } = useParams()
    const [planet, setPlanet] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${planetID}/`)
            .then((res) => {
                setPlanet(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[planetID])

    return (
        <div className="container text-start">
            <h1>{planet.name}</h1>
            <p><b>Climate: </b>{planet.climate}</p>
            <p><b>Terrain: </b>{planet.terrain}</p>
            <p><b>Surface Water: </b>{planet.surface_water}</p>
            <p><b>Population: </b>{planet.population}</p>
        </div>
    );
}

export default Planets;