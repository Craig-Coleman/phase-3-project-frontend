import React, { useState } from 'react';

function Item ({ item }) {

    const { id, name, category, price } = item;

    const [itemName, setItemName] = useState(name);
    const [itemCategory, setItemCategory] = useState(category);
    const [itemPrice, setItemPrice] = useState(price);


    function handleEditClick() {
        const editNameForm = document.getElementById(`editNameDiv${id}`);
        const editPriceForm = document.getElementById(`editPriceDiv${id}`);
        editNameForm.hidden = false;
        editPriceForm.hidden = false;

    }

    function handleSubmit(e) {
        e.preventDefault()
        const editNameDiv = document.getElementById("editNameDiv");
        const editPriceDiv = document.getElementById("editPriceDiv");
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
    }

    function handleEditName(e) {
        setItemName(e.target.value)
    }

    function handleEditPrice(e) {
        setItemPrice(e.target.value)
    }

    function handleDeleteClick() {
        console.log("delete")
    }

    return (
        <div id="item">
            <h3>{itemName} / {itemCategory} / ${itemPrice}</h3>
            <button onClick={handleEditClick}>Edit Item</button>
            <select selected={itemCategory}>
                <option value="produce">Produce</option>
                <option value="condiment">Condiment</option>
                <option value="frozen">Frozen</option>
                <option value="deli">Deli</option>
            </select>
            <button onClick={handleDeleteClick}>delete item</button>
            <div id={`editNameDiv${id}`} hidden>
                <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Enter New Name" onChange={(e) => handleEditName(e)}></input>
                <input type="submit" value="save name"></input>
                </form>
            </div>
            <div id={`editPriceDiv${id}`} hidden>
                <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Enter New Price" onChange={(e) => handleEditPrice(e)}></input>
                <input type="submit" value="save price"></input>
                </form>
            </div>
        </div>
    );
};

export default Item;