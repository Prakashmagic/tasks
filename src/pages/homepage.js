import React from "react";
import { NavLink } from "react-router-dom";


const HomePage =() => {

    return(
    <div>
        <h1>this is home page</h1>
        <br></br>
        <NavLink to="/contact">go to ContactPage</NavLink>
        <br></br>
        <NavLink to="/destination-dot">go to destination</NavLink>
        <br></br>
        <NavLink to="/mailpage">go to mail page</NavLink>
        <br></br>
        <NavLink to="/register">go to register form</NavLink>
        <br></br>
        <NavLink to="/user">go to user page</NavLink>
    </div>
    )
}

export default HomePage;