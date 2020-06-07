import React from 'react';
import ListItem from './Listitem.js';

function List(props) {
    // console.log(props)
    return (
        <div className={props.className}>
            {props.items.map(value => <ListItem key={value.id} item={value} moveItemToCart={props.moveItemToCart} deleteItem={props.deleteItem} />)}
        </div>

    )
}
export default List