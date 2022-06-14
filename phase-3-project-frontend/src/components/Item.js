import React, { useState } from 'react';

function Item ({ item }) {

    const { name, category, price } = item
    const [itemName, setItemName] = useState(name)

    function handleEditClick() {
        if (document.getElementById("editDiv") === null) {
        const editDiv = document.createElement('div')
        editDiv.id = "editDiv"
        const editForm = document.createElement('form');
        editForm.addEventListener("submit", handleSubmit)
        const editNameBox = document.createElement('input');
        editNameBox.type = "text";
        editNameBox.placeholder = "Edit Item Name";
        editNameBox.id = "editNameBox"
        editNameBox.addEventListener("change", handleEditName)
        const editFormSubmitBtn = document.createElement('input');
        editFormSubmitBtn.type = "submit";
        editFormSubmitBtn.value = "Submit";
        const item = document.getElementById("item");
        item.appendChild(editDiv);
        editDiv.appendChild(editForm);
        editForm.appendChild(editNameBox);
        editForm.appendChild(editFormSubmitBtn);
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    function handleEditName(e) {
        setItemName(e.target.value)
    }

    function handleDeleteClick() {
        console.log("delete")
    }

    return (
        <div id="item">
            <h3>{itemName} / {category} / ${price}</h3>
            <button onClick={handleEditClick}>edit name</button>
            <select>
                <option value="produce">Produce</option>
                <option value="condiment">Condiment</option>
                <option value="frozen">Frozen</option>
                <option value="deli">Deli</option>
            </select>
            <button onClick={handleDeleteClick}>delete item</button>
        </div>
    );
};

export default Item;