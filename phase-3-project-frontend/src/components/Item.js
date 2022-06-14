import React, { useState } from 'react';

function Item ({ item }) {

    const { id, name, category, price } = item;

    const [itemName, setItemName] = useState(name);
    const [itemCategory, setItemCategory] = useState(category);
    const [itemPrice, setItemPrice] = useState(price);

    function handleSubmit(e) {
        e.preventDefault()
        const editForm = document.getElementById(`editForm${id}`);
        fetch(`http://localhost:9292/items/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: itemName,
                category: itemCategory,
                price: itemPrice,
            }),
            headers: { 'Content-type': 'application/json' },
        })
        .then((res) => res.json());
        editForm.hidden = true
    }

    function handleEditClick() {
        const editForm = document.getElementById(`editForm${id}`);
        editForm.hidden = false;
    }

    function handleEditName(e) {
        setItemName(e.target.value)
    }

    function handleEditPrice(e) {
        setItemPrice(e.target.value)
    }

    function handleDeleteClick() {
        fetch(`http://localhost:9292/items/${id}`, {
            method: 'DELETE'
        })
        .then((res) => res.json())
    }

    function handleEditCategory(e) {
        setItemCategory(e.target.value)
    }

    return (
        <div>
            <div id="item">
                <h3>{itemName} / {itemCategory} / ${itemPrice}</h3>
                <button onClick={handleEditClick}>Edit Item</button>
                <button onClick={handleDeleteClick}>delete item</button>
            </div>
            <div id={`editForm${id}`} hidden>
                <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Enter New Name" onChange={(e) => handleEditName(e)}></input>
                <input type="text" placeholder="Enter New Price" onChange={(e) => handleEditPrice(e)}></input>
                <select defaultValue={itemCategory} onChange={(e) => handleEditCategory(e)}>
                    <option value="produce" id="produce">Produce</option>
                    <option value="condiment" id="condiment">Condiment</option>
                    <option value="frozen" id="frozen">Frozen</option>
                    <option value="deli" id="deli">Deli</option>
                </select>
                <input type="submit" value="save changes"></input>
                </form>
            </div>
        </div>
    );
};

export default Item;