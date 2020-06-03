import React from 'react';
import ReactDom from 'react-dom';

function myTestApp {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
};

ReactDOM.render(
    <myTestApp/>,
    document.getElementById("root");
)

 