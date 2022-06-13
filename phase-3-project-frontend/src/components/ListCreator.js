import React from 'react';

function ListCreator() {
    return (
        <div>
            <h3>Create a New Shopping List</h3>
            <form>
                <input type="text" placeholder="Item Name" required></input>
                <input type="text" placeholder="Price (optional)"></input>
                <input type="submit" value="Add Item"></input>
            </form>
            <select>
                <option value="produce">Produce</option>
                <option value="condiment">Condiment</option>
                <option value="frozen">Frozen</option>
                <option value="deli">Deli</option>
            </select>
        </div>
    );
};

export default ListCreator;