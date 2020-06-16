import React from 'react'
import Diagramview from './Diagramview'

function Diagramcontainer(props) {
    //console.log(props)

    return (
        <div>
            <Diagramview
                students={props.students}
            />
        </div>
    )
}
export default Diagramcontainer