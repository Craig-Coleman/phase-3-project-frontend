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
        </div>
    )
}

export default NavBar;