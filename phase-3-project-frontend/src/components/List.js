import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';


function List() {

    const [list, setList] = useState([])
    const [items, setItems] = useState([])

    let { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/lists/${id}`)
        .then((r) => r.json())
        .then((data) => setList(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:9292/lists/${id}`)
        .then((r) => r.json())
        .then(data => setItems(data.items))
    }, [])

    const itemsList = items.map((item) => {
        return (
            <Item key={item.id} item={item} />
        )
    })

    return (
        <div>
            <h1>{list.name}</h1>
            <ul>
                {itemsList}
            </ul>
        </div>
    )
};

export default List;