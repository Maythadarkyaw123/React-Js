import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('https://randomuser.me/api/')
            .then(res => {
                setUsers(res.data.results); // Fix: Store only the results array
            })
            .catch(err => {
                console.log(err);
            });
    }, []); // Fix: Add dependency array to fetch only once

    // Fix: Prevent errors when users array is empty
    if (users.length === 0) {
        return <p>Loading...</p>;
    }

    // Get a random user
    const randomUser = users[Math.floor(Math.random() * users.length)];

    return (
        <div>
            <h2>Random User</h2>
            <li key={randomUser.login.uuid}>
                {randomUser.name.first} {randomUser.name.last}
            </li>
        </div>
    );
}

export default RandomUser;
