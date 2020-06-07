import React from 'react';
import List from './List';

function GroceryList(props) {
    return (
        <div>
            <h2>GroceryList</h2>
            <List className={props.className} items={props.groceries} moveItemToCart={props.moveItemToCart} />
        </div>
    )
}
export default GroceryList