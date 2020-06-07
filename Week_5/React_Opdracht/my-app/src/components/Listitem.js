import React from 'react';

function ListItem(props) {
    // console.log(props)
    return (
        <div className="ListItem">
            <li>{props.item.product}</li>
            {props.moveItemToCart ? <button key={props.item.id} onClick={() => props.moveItemToCart(props.item.id)}>cta</button>
                : <button key={props.item.id} onClick={() => props.deleteItem(props.item.id)}>delete</button>}
        </div>

    )
}
export default ListItem