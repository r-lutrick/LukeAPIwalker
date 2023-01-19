import React from "react";
import axios from 'axios'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const People = () => {
    const {peopleID} = useParams()
    const [people, setPeople] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${peopleID}`)
        .then((res) => {
            setPeople(res.data)
        })
        .catch((err) => {
            console.log('error', err)
        })
    })

    return (
        <div className="container text-start">
            <h1>{people.name}</h1>
            <p><b>Height: </b>{people.height} cm</p>
            <p><b>Mass: </b>{people.mass} kg</p>
            <p><b>Hair Color: </b>{people.hair_color}</p>
            <p><b>Skin Color: </b>{people.skin_color}</p>
        </div>
        );
}

export default People;