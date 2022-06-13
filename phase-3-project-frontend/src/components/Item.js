import React from 'react';

function Item ({ item }) {
    return (
        <div>
            <h3>{item.name} / {item.category} / ${item.price}</h3>
        </div>
    );
};

export default Item;