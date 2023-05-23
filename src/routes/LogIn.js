import React from "react";

import { NavLink } from 'react-router-dom';

export default function LogIn() {
    return(
        <>
        <h1>in construction</h1>
        <NavLink to={"/plan/monday"} className="tile-link">
            PLAN LEKCJI 
        </NavLink>
        <br></br>
        <br></br>
        <br></br>
        <NavLink to={"/"} className="tile-link">
            LANDING PAGE 
        </NavLink>
        </>
    );
}
