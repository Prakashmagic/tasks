import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {

    const navigate = useNavigate();

    let [account, setAccount] = useState({
        email : "",
        password : ""
    });

    const  submitaccount = () => {
        const api_url = "https://reqres.in/api/register";

        axios.post(api_url, account)
        .then((response) => {
        let serverData = response.data;
        console.log(serverData);
        navigate("/destination-dot");
        })
        .catch((error) => {
        alert("regitration failed");
        })
    }

        const handleInput = (event) => {
            setAccount({...account, [event.target.id] : event.target.value});
        }


    
    return(
        <div>
            <h1>create your account</h1> 
            <div className="space">
                <label className="register-label">enter your email id</label>
                <input type="text" placeholder="type your mail" onChange={handleInput} className= "register-input" id= "email" ></input>
                </div>
            <div className="space">
                <label className="register-label">enter your password</label>
                <input type="password" placeholder="type your password" onChange={handleInput} className="register-input" id="password" ></input>
            <div>
           
                <button onClick={() => submitaccount()}>submit button</button>
            </div>
            </div>
        </div>
    )
}

export default CreateAccount;