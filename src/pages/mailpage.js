import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const MailPage = () => {
    return (
        <div className="container">
            <div className="header">
                <NavLink to="/">back</NavLink>
            </div>
            <div className="mail-content">
                <div className="side-bar">
                    <NavLink to="/mailPage/inbox">inbox</NavLink>
                    <br></br>
                    <NavLink to="/mailPage/sent">sent</NavLink>
                    <br></br>
                    <NavLink to="/mailpage/primary">primary</NavLink>
                    <br></br>
                    <NavLink to="/mailpage/account">new account</NavLink>
                    <br></br>
                    <NavLink to="updatep">update profiles</NavLink>
                </div>
                <div className="content">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    )
}

export default MailPage;