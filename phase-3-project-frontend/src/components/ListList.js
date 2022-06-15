import React from 'react';
import { Link } from 'react-router-dom';

function ListList({ lists }) {

   const listOfLists = lists.map(list => 
        <li key={list.id}>
                <Link to={`/lists/${list.id}`}>
                    {list.name}
                </Link>
        </li>
    )
 
    return (
        <ul>
            {listOfLists}
        </ul>
    );
};

export default ListList;