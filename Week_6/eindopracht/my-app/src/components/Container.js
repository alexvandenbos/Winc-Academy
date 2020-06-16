import React from 'react'
import Students from './Students'
import Studentlist from './Studentlist'
import Diagramcontainer from './Diagramcontainer'

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            Students
        }
        this.selectStudentInformation = this.selectStudentInformation.bind(this)
    }
    //checkbox die display in state verandert van true naar false & false naar true
    selectStudentInformation(event) {
        let idStudent = parseInt(event.target.value)
        let selectedStudentDisplay = this.state.Students.filter(student =>
            student.id === idStudent)[0].display

        if (selectedStudentDisplay) {
            this.setState(prevState => {
                prevState.Students.filter(student =>
                    student.id === idStudent).map(items =>
                        items.display = false)
            })
        } else {
            this.setState(prevState => {
                prevState.Students.filter(student =>
                    student.id === idStudent).map(items =>
                        items.display = true)
            })
        }
        console.log(this.state.Students.map(student => student.display))
    }

    render() {
        return (

            <React.Fragment >
                <Studentlist
                    students={this.state.Students}
                    checkbox={this.selectStudentInformation}
                />
                <Diagramcontainer
                    students={this.state.Students.filter(student => student.display === true)}
                />
            </React.Fragment >
        )
    }
}
export default Container