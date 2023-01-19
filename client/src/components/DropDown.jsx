import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
    const [select, setSelect] = useState("people")
    const [text, setText] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`${select}/${text}`)
    }

    return (
        <div className="container d-flex align-items-center justify-content-around text-start">
            {/* <form onSubmit={handleSubmit} className='form-control'> */}
                <label htmlFor="selectOptions">Search for: </label>
                <select id="selectOptions" value={select} onChange={(e) => setSelect(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label htmlFor="textForm">ID: </label>
                <input type="text" id="textForm" onChange={(e) => setText(e.target.value)} />
                <button onClick={handleSubmit} className="btn btn-dark">Submit</button>
            {/* </form> */}
        </div>
    );
}


export default DropDown;