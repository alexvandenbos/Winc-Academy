import React from 'react';
function Joke() {

    return (
        <div>
            <p style={{ color: !props.question && "red" }}>Naam: {props.question}</p>
            <p>Afbeelding URL: {props.punchline}</p>
        </div>

    )
}
export default Joke