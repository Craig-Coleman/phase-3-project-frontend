import React from 'react';
import { NavLink } from 'react-router-dom';

function ListList({ lists }) {


   const listOfLists = lists.map(list => {
    return(
        <li key={list.id}>
            <NavLink className="navlink" to={`/lists/${list.id}`}>
                {list.name}
            </NavLink>
        </li>
        )
    })
     
 
    return (
        <ul>
            {listOfLists}
        </ul>
    );
};

export default ListList;