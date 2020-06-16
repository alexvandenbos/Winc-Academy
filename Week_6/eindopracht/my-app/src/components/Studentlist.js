import React from 'react'
import Studentlistitem from './Studentlistitem'

function Studentlist(props) {
    //console.log(props)
    return (
        <menu className="StudentList">
            <h2>Students</h2>
            {props.students.map(student =>
                <Studentlistitem
                    key={student.id}
                    id={student.id}
                    fullname={student.name + " " + student.surname}
                    currentDisplay={student.display}
                    checkbox={props.checkbox}
                />)}
        </menu>
    )
}

export default Studentlist