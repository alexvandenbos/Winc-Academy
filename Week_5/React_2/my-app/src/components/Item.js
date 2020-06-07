import React from 'react';
function Item(props) {
    console.log(props)

    return (
        <div>
            <p>Naam: {props.product.name}</p>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
        </div>
    )
}
export default Item