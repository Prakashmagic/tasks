import React, { useState, useEffect } from "react";
import axios from "axios";

const UserPage = () => {

    let [profiles, setProfiles] = useState([]);

    useEffect(() => {
        loadProfiles(1);

    }, [])

    const loadProfiles = (pagenumber) => {
        const api_upi = "https://reqres.in/api/users?page=" + pagenumber;

        axios.get(api_upi)
            .then((response) => {
                let severData = response.data;
                setProfiles(severData.data);
                console.log(severData.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <div>
            <h1>this is a user page</h1>
            <table id="customers">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>EMAIL</th>
                        <th>NAMES</th>
                        <th>PROFILES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        profiles.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.first_name} {value.last_name}</td>
                                    <td>{value.email}</td>
                                    <td>
                                        <img className="profile_picture" src={value.avatar} alt="profile_picture" />
                                    </td>
                                </tr>
                            )


                        })
                    }
                    {profiles.length === 0 &&
                        <tr>
                            <td colSpan={4}>value not in here</td>
                        </tr>
                    }
                </tbody>
            </table>
            <div>
                <button onClick={() => loadProfiles(1)}>button 1</button>
                <button onClick={() => loadProfiles(2)}>button 2</button>
                <button onClick={() => loadProfiles(3)}>button 3</button>
            </div>
        </div>
    )
}

export default UserPage;