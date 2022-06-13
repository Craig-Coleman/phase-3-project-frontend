import React from 'react';

function Item ({ item }) {
    return (
        <div>
            <h1>{item.name} / {item.category} / ${item.price}</h1>
        </div>
    );
};

export default Item;