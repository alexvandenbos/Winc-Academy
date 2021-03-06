import React from 'react';
import List from './List';


function ShoppingCart(props) {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <List className={props.className} items={props.cartItems} deleteItem={props.deleteItem} />
        </div>
    )
}
export default ShoppingCart