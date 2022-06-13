import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <NavLink
                className="navlink" 
                to="/lists"
            >
                My Lists
            </NavLink>
            <NavLink
                className="navlink"
                to="/createlist"
            >
                Create a New List
            </NavLink>
        </div>
    )
}

export default NavBar;