import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useParams, Link } from "react-router-dom";

const People = () => {
    const { peopleID } = useParams()
    const [people, setPeople] = useState([])
    const [homeworld, setHomeworld] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${peopleID}`)
            .then((res) => {
                setPeople(res.data);
                return axios.get(`${people.homeworld}`)
                    .then((res) => {
                        setHomeworld({
                            'id': res.data.url,
                            'name': res.data.name
                        })
                        setLoading(false)
                    })
                    .catch((err) => {
                        console.log('error', err)
                    })
            })
            .catch((err) => {
                console.log('error', err)
            })
    }, [peopleID, people.homeworld])

    // wait for nested api call to finish then create format string variable
    let planetID = ""
    if (!loading) {
        planetID = homeworld.id
        planetID = planetID.split('/')[5]
    }

    return (
        <div className="container text-start">
            <h1>{people.name}</h1>
            <p><b>Height: </b>{people.height} cm</p>
            <p><b>Mass: </b>{people.mass} kg</p>
            <p><b>Hair Color: </b>{people.hair_color}</p>
            <p><b>Skin Color: </b>{people.skin_color}</p>
            <Link to={`/planets/${planetID}`}>{homeworld.name}</Link>
        </div>
    );
}

export default People;