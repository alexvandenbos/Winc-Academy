import React from 'react';
import Week from './Week';

function Maand(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th><h2>Week</h2></th>
                    <th><h2>Monday</h2></th>
                    <th><h2>Tuesday</h2></th>
                    <th><h2>Wednesday</h2></th>
                    <th><h2>Thursday</h2></th>
                    <th><h2>Friday</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <Week
                        className="week1"
                        Afspraken={props.Afspraken.filter(afspraak => afspraak.Datum[0] === 1)}
                    />
                </tr>
                <tr>
                    <td>2</td>
                    <Week className="week2"
                        Afspraken={props.Afspraken.filter(afspraak => afspraak.Datum[0] === 2)}
                    />
                </tr>
                <tr>
                    <td>3</td>
                    <Week className="week3"
                        Afspraken={props.Afspraken.filter(afspraak => afspraak.Datum[0] === 3)}
                    />
                </tr>
                <tr>
                    <td>4</td>
                    <Week className="week4"
                        Afspraken={props.Afspraken.filter(afspraak => afspraak.Datum[0] === 4)}
                    />
                </tr>
            </tbody>
        </table>
    )
}
export default Maand;