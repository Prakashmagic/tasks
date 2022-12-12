import React from "react";
import { useSelector } from "react-redux";

const Sent = () => {

    const userDataList = useSelector((state) => state.AppReducer.userList);

    console.log(userDataList);
    return(
        <div>
            <h1>this is a sent page</h1>
            <div style={{"height" : "600px"}}>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>mail</th>
                        <th>date of birth</th>
                        <th>hobbies</th>
                        <th>address</th>
                        <th>qualification</th>
                    </tr>
                </thead>
                <tbody>
                    {
                     userDataList.map((value, index)=> {
                        return(
                            <tr key={index}>
                                <td>{value.userName}</td>
                                <td>{value.mail}</td>
                                <td>{value.dateOfBirth}</td>
                                <td>{value.hobbies}</td>
                                <td>{value.address}</td>
                                <td>{value.qualification}</td>
                            </tr>
                        )
                     })   
                    }
                </tbody>
                </table>
            </div>

        </div>
    )
}

export default Sent;

