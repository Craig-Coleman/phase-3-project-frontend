import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';


function List() {

    const [list, setList] = useState([]);
    const [newListName, setNewListName] = useState("");
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemCategory, setItemCategory] = useState("Produce");

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
        .then((data) => handleData(data))
    }, []);

    function handleData(data) {
        setList(data);
        setItems(data.items);
    };

    function handleClickEdit() {
        const form = document.getElementById("form");
        form.hidden = !form.hidden;
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/lists/${id}`, {
            method: "PATCH",
            body: JSON.stringify({name:  newListName}),
            headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json())
        .then((data) => setList(data));
    }

    const itemsList = items.map((item) => {
        return (
            <Item key={item.id} item={item} deleteItem={deleteItem} />
        )
    });

    function deleteItem(itemId) {
        fetch(`http://localhost:9292/lists/${id}/items/${itemId}`, {
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then(setItems(items.filter(item => item.id !== itemId)));
    };

    function addItem(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/lists/${id}/items`, {
            method: 'POST',
            body: JSON.stringify(newItemObj),
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            }
          })
          .then((res) => res.json())
          .then((data) => setItems([...items, data]));
          const addForm = document.getElementById("addForm");
          addForm.reset()
    };

    return (
        <div>
            <div>
            <h1>{list.name}</h1>
            <button onClick={handleClickEdit}>Edit Name</button>
            <form id="form" onSubmit={(e) => handleSubmit(e)} hidden>
                <input type="text" placeholder="New Name" onChange={(e) => setNewListName(e.target.value)}></input>
                <input type="submit" value="save"></input>
            </form>
            </div>
            <ul>
                {itemsList}
            </ul>
            <h2>Add New Item</h2>
            <div>
                <form id="addForm" onSubmit={(e) => addItem(e)}>
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