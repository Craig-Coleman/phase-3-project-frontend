import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';


function List({ addItem }) {

    const [list, setList] = useState([]);
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemCategory, setItemCategory] = useState("");

    let { id } = useParams();

    const newItemObj = {
        name: itemName,
        price: itemPrice,
        category: itemCategory,
        list_id: id
    };

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

    function handleSubmit(e) {
        e.preventDefault();
        addItem(newItemObj);
    }

    return (
        <div>
            <h1>{list.name}</h1>
            <ul>
                {itemsList}
            </ul>
            <h2>Add New Item</h2>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="New Item Name" onChange={(e) => setItemName(e.target.value)}></input>
                <input type="text" placeholder="New Item Price" onChange={(e) => setItemPrice(e.target.value)}></input>
                <select onChange={(e) => setItemCategory(e.target.value)}>
                    <option value="produce" id="produce">Produce</option>
                    <option value="condiment" id="condiment">Condiment</option>
                    <option value="frozen" id="frozen">Frozen</option>
                    <option value="deli" id="deli">Deli</option>
                </select>
                <input type="submit" value="Add Item"></input>
                </form>
            </div>
        </div>
    )
};

export default List;