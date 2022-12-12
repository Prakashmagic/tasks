import React, { useState } from "react";

const SimpleFormSubmition = () => {

    // let messege = "hii magic how are you";
    let address = {
        street: "tondiar pet",
        area: "kasimedu"
    }

    let [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    });

    let [inlineCondition, setInlineCondition] = useState(true);

    let [ifElseCondition, setIfelseCondition] = useState(false);

    let [passwordVisibility, setPasswordVisibility] = useState(false);

    const onsubmitForm = () => {
        console.log(loginForm);
    }

    const handleInput = (event) => {
        setLoginForm({ ...loginForm, [event.target.id]: event.target.value });
        // console.log(event.target.value, event.target.id);
        //    console.log(event.target.value);
    }

    const handlingConditionRendering = (condition) => {
        setInlineCondition(condition);
    }

    const handlingIfelseCondition = () => {
        let condition = !ifElseCondition;
        setIfelseCondition(condition);
    }

    const handlePasswordVisibility = (condition) => {
        setPasswordVisibility(condition);
    }
    return (
        <div>
            <h1>{address.area}</h1>
            <h1>type username {loginForm.username}</h1>
            <h1>type password  {loginForm.password}</h1>
            <div className="space">
                <label className="label">enter your username</label>
                <input type="text" placeholder="please enter your username" onChange={handleInput} id="username" />
            </div>
            <div className="space">
                <label className="label">enter your password</label>
                <input type={passwordVisibility ? "text" : "password"} placeholder="please your password" onChange={handleInput} id="password" />
             
             {passwordVisibility ?  <img src={require("../image/open eye icon.png")} alt="open eye" className="password-icon" onClick={() => handlePasswordVisibility(false)}></img>
             : <img src={require("../image/close eye icon.png")} alt="close eye" className="password-icon" onClick={() => handlePasswordVisibility(true)}></img>}
               
                
            </div>
            <div className="space">
                <button onClick={() => onsubmitForm()}>submit form</button>
            </div>
            <div>
                <h2>conditional rendering</h2>
                <button onClick={() => handlingConditionRendering(true)}>show messege</button>
                <button onClick={() => handlingConditionRendering(false)}>hide messege</button>

                {inlineCondition && <div>
                    <h1>this is a inline if condition</h1>
                    <h1>i will be show & hide based on a condition</h1>
                </div>}

            </div>
            <div>
                <h1>this is inline if else</h1>
                <button onClick={() => handlingIfelseCondition()}>switch {ifElseCondition ? "on": "off"}</button>

                {ifElseCondition ? <img src="https://thumbs.dreamstime.com/b/vector-light-bulb-white-file-eps-format-34983265.jpg" style={{ "width": "100px" }} alt="bulb on"></img>
                    :
                    <img src="https://previews.123rf.com/images/ericmilos/ericmilos0912/ericmilos091200136/6109526-3d-render-of-light-bulb-on-white.jpg" style={{ "width": "100px" }} alt="bulb off"></img>
                }



            </div>
        </div>
    )
}

export default SimpleFormSubmition;
