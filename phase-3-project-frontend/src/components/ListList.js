import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ListList({ lists, setLists }) {

    const [newListName, setNewListName] = useState("");

    function handleDelete(e) {
        const id = e.target.id * -1
        fetch(`http://localhost:9292/lists/${id}`, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then(setLists(lists.filter((list) => list.id !== id)));
    };

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/lists`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ name: newListName })
        })
        .then((res) => res.json())
        .then((data) => setLists([...lists, data]));
        const form = document.getElementById("form");
        form.reset();
    }

   const listOfLists = lists.map(list => 
        <div key={list.id} id={list.id}>
        <li>
                <Link to={`/lists/${list.id}`}>
                    {list.name}
                </Link>
        </li>
        <button id={list.id * -1} onClick={(e) => handleDelete(e)}>Delete List</button>
        </div>
    )
 
    return (
        <div>
            <ul>
                {listOfLists}
            </ul>
            <h3>Create New List</h3>
            <form id="form" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="New List Name" onChange={(e) => setNewListName(e.target.value)}></input>
                <input type="submit" value="create"></input>
            </form>
        </div>
    );
};

export default ListList;