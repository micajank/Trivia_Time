import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';


export default function Landing() {
    const [name, setName] = useState("");
    let [redirect, setRedirect] = useState("");


    const handleSubmit = e => {
        e.preventDefault();
        console.log(name);
        setRedirect(<Redirect to={'/gameboard'} />)
    }

    return (
        <div className="login">
            <h1>Welcome to Triva Time</h1>
            <form className="name-form" onSubmit={handleSubmit}>
                <label>Enter Your Name:</label>
                <input type='text' name='name' onChange={e => setName(e.target.value)} required></input>
                <button className="btn" type='submit'>Submit</button>
            {redirect}
            </form>
        </div>
    )
}