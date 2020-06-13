import React from 'react'
import Patientenbestand from './Patienten'
import Tandartsbestand from './Tandartsen'
import Assistentbestand from './Assistenten'
import Maand from './Maand'
import Afspraken from './Afspraken'
import Inputnewappointment from './Inputnewappointment'

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            Tandartsbestand,
            Assistentbestand,
            Patientenbestand,
            Afspraken
        }
        this.addIdToPatients = this.addIdToPatients.bind(this)
    }
    addIdToPatients() {
        this.setState(prevState => ({
            Patientenbestand: prevState.Patientenbestand.map(patient =>
                ({ ...patient, id: prevState.Patientenbestand.indexOf(patient) + 1 }))
        }))
    }
    render() {
        return (
            <React.Fragment>
                <Inputnewappointment
                />
                <Maand
                    Afspraken={this.state.Afspraken}
                    key="Maandoverzicht"
                />
            </React.Fragment>
        )
    }
    componentDidMount() {
        this.addIdToPatients()
    }
}
export default Container