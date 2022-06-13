import React from 'react';

function ListList({ lists }) {

   const listOfLists = lists.map(list => {
    return(
        <li key={list.id}>{list.name}</li>
        )
    }) 
 
    return (
        <ul>
            {listOfLists}
        </ul>
    );
};

export default ListList;