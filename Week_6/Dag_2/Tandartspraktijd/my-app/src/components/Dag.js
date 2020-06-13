import React from 'react';

function Dag(props) {
    //console.log(props.Afspraken)

    const listItems = props.Afspraken.map((afspraak) =>
        <li key={afspraak.id}>{afspraak.PatientId}<button>done</button><button>remove</button></li>
    );
    return (
        <div className={props.className}>
            {listItems}
        </div>

    )
}
export default Dag