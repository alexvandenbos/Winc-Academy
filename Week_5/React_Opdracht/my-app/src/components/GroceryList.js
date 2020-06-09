import React from 'react';
import List from './List';
import Inputfield from './Inputfield';

function GroceryList(props) {
    // console.log(props.groceries)
    return (
        <div>
            <h2>Grocery List</h2>
            <Inputfield groceries={props.groceries} addItemtoGroceryItems={props.addItemtoGroceryItems} />
            <List className={props.className} items={props.groceries} moveItemToCart={props.moveItemToCart} />
        </div>
    )
}
export default GroceryList
