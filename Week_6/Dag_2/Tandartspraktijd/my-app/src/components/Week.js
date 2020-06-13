import React from 'react'
import Dag from './Dag'

function Week(props) {
    //console.log(props)
    return (
        <React.Fragment>
            <td>
                <Dag
                    className="monday"
                    key={props.className + "monday"}
                    Afspraken={props.Afspraken.filter(afspraak => afspraak.Datum[1] === 1)}
                />
            </td>
            <td>
                <Dag
                    className="tuesday"
                    key={props.className + "tuesday"}
                    Afspraken={props.Afspraken.filter(afspraak => afspraak.Datum[1] === 2)}
                />
            </td>
            <td>
                <Dag className="wednesday"
                    key={props.className + "wednesday"}
                    Afspraken={props.Afspraken.filter(afspraak => afspraak.Datum[1] === 3)}
                />
            </td>
            <td>
                <Dag
                    className="thursday"
                    key={props.className + "thursday"}
                    Afspraken={props.Afspraken.filter(afspraak => afspraak.Datum[1] === 4)}
                />
            </td>
            <td>
                <Dag
                    className="friday"
                    key={props.className + "friday"}
                    Afspraken={props.Afspraken.filter(afspraak => afspraak.Datum[1] === 5)}
                />
            </td>
        </React.Fragment>
    )
}
export default Week