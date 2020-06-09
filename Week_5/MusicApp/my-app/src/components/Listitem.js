import React from 'react';

function ListItem(props) {
    // console.log(props)
    return (
        <li className="ListItem">
            <span>{props.title}</span>
            <span>{props.artist}</span>
            <span>{props.genre}</span>
            <span> {props.rating}</span>
            <button key={props.id} onClick={() => props.deleteItem(props.id)}>delete</button>
        </li>
    )
}
export default ListItem