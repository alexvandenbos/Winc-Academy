import React from 'react'

function Studentlistitem(props) {
    //console.log(props)
    return (
        <li>
            <input type="checkbox" value={props.id} onChange={props.checkbox} defaultChecked={props.currentDisplay}></input>
            {props.fullname}
        </li>
    )
}

export default Studentlistitem