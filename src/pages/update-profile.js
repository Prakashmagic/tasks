import React from "react";

const UpdateProfiles = () => {

    const submitnewform = () => {

    }

    const handleInput = (event) => {
        // setAccount({...account, [event.target.id] : event.target.value});
    }
    return(
        <div>
            <h1>update your profile picture</h1>
            <div className="space">
                <label className="register-label">enter your name</label>
                <input type="text" placeholder="type your name" onChange={handleInput}  className= "register-input" id= "email" ></input>
                </div>
                <div className="space">
                <label className="register-label">enter your job</label>
                <input type="text" placeholder="type your job" onChange={handleInput}  className= "register-input" id= "email" ></input>
                </div>
                <div>
                <button onClick={() => submitnewform()}>submit button</button>
            </div>
           
        </div>
    )
}

export default UpdateProfiles;