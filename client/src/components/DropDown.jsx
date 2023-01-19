import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
    const [catagory, setCatagory] = useState("people")
    const [id, setID] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`${catagory}/${id}`)
    }

    return (
        <div className="container d-flex align-items-center justify-content-around text-start">
            {/* CATAGORY */}
            <label htmlFor="selectOptions">Search for: </label>
            {/* Drop down selection updates select state */}
            <select id="selectOptions" value={catagory} onChange={(e) => setCatagory(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                {/* <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option> */}
            </select>

            {/* ID */}
            <label htmlFor="textForm">ID: </label>
            {/* Text input for ID gets updated */}
            <input type="text" id="textForm" onChange={(e) => setID(e.target.value)} />
            <button onClick={handleSubmit} className="btn btn-dark">Submit</button>
        </div>
    );
}


export default DropDown;