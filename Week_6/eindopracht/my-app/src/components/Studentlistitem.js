import React from 'react'

function Studentlistitem(props) {
    //console.log(props)
    return (
        <li>
            <span>
                <input
                    type="checkbox"
                    value={props.id}
                    onChange={props.checkbox}
                    checked={props.currentDisplay}>
                </input>
                {props.fullname}
                <button
                    value={props.id}
                    onClick={props.button}> select only
                </button>
            </span>
        </li>
    )
}

export default Studentlistitem