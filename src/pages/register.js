import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendUserData } from "../redux/actions/app-action";

const RegisterPage = () => {

    const dispatch = useDispatch();

    let [registerForm, setRegisterForm] = useState({
        userName  : "",
        password : "",
        mail : "",
        dateOfBirth : "",
        gender : "",
        hobbies : [],
        address : "",
        qualification : ""

    });

    let [formError, setFormError] = useState({
        userName : "false ",
        password : "false",
        mail : "false",
        dateOfBirth : "false",
        gender : "false",
        hobbies : "false",
        address : "false",
        qualification : "false"
    })

    let [accountList, setAccountList] = useState([]);

    const submitInput = () => {
        console.log(registerForm);
        setFormError({
            userName : registerForm.userName === "" ? true : false,
            password : registerForm.password === "" ? true : false,
            mail : registerForm.mail === "" ? true : false,
            dateOfBirth : registerForm.dateOfBirth === "" ? true : false,
            gender : registerForm.gender === "" ? true : false,
            hobbies : registerForm.hobbies.length === 0 ? true : false,
            address : registerForm.address === "" ? true : false,
            qualification : registerForm.qualification === "" ? true : false
        });

        accountList.push(registerForm);
        setAccountList(accountList);

        // let data = sendUserData(registerForm);
        // dispatch(data);
        dispatch(sendUserData (registerForm));

        // setAccountList(...accountList, registerForm);
    };

    const handleIuput = (event) => {
        if (event.target.name === "hobbies") {
            if (event.target.checked) {
                registerForm.hobbies.push(event.target.value);
            }
            else {
                const index = registerForm.hobbies.indexOf(event.target.value);
                registerForm.hobbies.splice(index, 1);
            }

            setRegisterForm({ ...registerForm, hobbies: registerForm.hobbies });
        }
        else {
            setRegisterForm({ ...registerForm, [event.target.name]: event.target.value });
        }

    };
    return (
        <div>
            <h1>this is register page</h1>
            <div className="space">
                <label className="register-label">enter your username</label>
                <input type="text" placeholder="type your name" className={ formError.userName ? "register-input input_error" : "register-input"} onChange={handleIuput} name="userName"></input>
                {formError.userName && <p className="error">please enter valid username</p>}         </div>
            <div className="space">
                <label className="register-label">enter your password</label>
                <input type="password" placeholder="type your password" className="register-input" onChange={handleIuput} name= "password"></input>
                {formError.password && <p className="error">please enter valid password</p>}
            </div>
            <div className="space">
                <label className="register-label">enter your mail</label>
                <input type="text" placeholder="type your mail" className="register-input" onChange={handleIuput} name="mail"></input>
                {formError.mail && <p className="error">please enter valid email</p>}
            </div>
            <div className="space">
                <label className="register-label">enter your DOB</label>
                <input type="date" className="register-input" onChange={handleIuput} name="dateOfBirth"></input>
                {formError.dateOfBirth && <p className="error">please enter valid dateofbirth</p>}
            </div>
            <div className="space">
                <label className="register-label">enter your gender</label>
                <input type="radio" name="gender" className="gender-size" onChange={handleIuput} value="male" />male
                <input type="radio" name="gender" className="gender-size" onChange={handleIuput} value="female" />female
                <input type="radio" name="gender" className="gender-size" onChange={handleIuput} value="others" />others
                {formError.gender && <p className="error">please enter valid gender</p>}
            </div>
            <div className="space">
                <label className="register-label">enter your hobbies</label>
                <input type="checkbox" name="hobbies" onChange={handleIuput} value="cricket" />cricket
                <input type="checkbox" name="hobbies" onChange={handleIuput} value="hockey" />hockey
                <input type="checkbox" name="hobbies" onChange={handleIuput} value="watcthing tv" />watching tv
                <input type="checkbox" name="hobbies" onChange={handleIuput} value="chess" />chess
                <input type="checkbox" name="hobbies" onChange={handleIuput} value="vollyball" />vollyball
                {formError.hobbies && <p className="error">please enter valid hobbies</p>}
            </div>
            <div className="space">
                <label className="register-label">enter your address</label>
                <textarea placeholder="enter your address" className="register-input" onChange={handleIuput} name="address"></textarea>
                {formError.address && <p className="error">please enter valid address</p>}
            </div>
            <div className="space">
                <label className="register-label"> select your higher qualification</label>
                <select className="register-input" defaultValue={""} onChange={handleIuput} name="qualification">
                    <option disabled value="">please select your qualification</option>
                    <option>under graduate</option>
                    <option>post graduate</option>
                    <option>engineering</option>
                    <option>diploma degree</option>
                    <option>navy</option>
                </select>
                {formError.qualification && <p className="error">please enter valid qualification</p>}
            </div>
            <div className="space">
                <button onClick={() => submitInput()}>create your account</button>
            </div>
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
                     accountList.map((value, index)=> {
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

            {/* REST API - 4 methods
1. GET - To read information from Server
2. POST - To Submit information to Server (CREATE)
3. PUT - To Submit information to Server (UPDATE)
4. DELETE - To delete information from Server */}
        </div>
    )
}

export default RegisterPage;