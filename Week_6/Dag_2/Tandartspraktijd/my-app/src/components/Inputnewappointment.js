import React from 'react'
class Inputnewappointment extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            surname: "",
            mail: "",
            phone: "",
            birthyear: "",
            type: ""
        }
        this.addNameToState = this.addNameToState.bind(this)
        this.addSurnameArtistToState = this.addSurnameArtistToState.bind(this)
        this.addMailToState = this.addMailToState.bind(this)
        this.addTelephoneToState = this.addTelephoneToState.bind(this)
        this.addBirthyearToState = this.addBirthyearToState.bind(this)
        this.addTypeToState = this.addTypeToState.bind(this)
    }
    addNameToState(event) {
        console.log(this.state.name)
        this.setState({
            name: event.target.value
        });
    }
    addSurnameArtistToState(event) {
        console.log(this.state.surname)
        this.setState({
            surname: event.target.value
        });
    }
    addMailToState(event) {
        console.log(this.state.mail)
        this.setState({
            mail: event.target.value
        });
    }
    addTelephoneToState(event) {
        console.log(this.state.phone)
        this.setState({
            phone: event.target.value
        });
    }
    addBirthyearToState(event) {
        console.log(this.state.birthyear)
        this.setState({
            birthyear: event.target.value
        });
    }
    addTypeToState(event) {
        console.log(this.state.type)
        this.setState({
            type: event.target.value
        });
    }
    render() {
        return (
            <div >
                <h1>Input new appointment</h1>
                <div className="InputAppointment">
                    <input
                        placeholder="Voornaam"
                        type="text"
                        onChange={this.addNameToState} />
                    <input
                        placeholder="Achternaam"
                        type="text"
                        onChange={this.addSurnameArtistToState} />
                    <input
                        placeholder="E-mail"
                        type="text"
                        onChange={this.addMailToState} />
                    <input
                        placeholder="Telefoon"
                        type="text"
                        onChange={this.addTelephoneToState} />
                    <input
                        type="number"
                        name="birthyear"
                        placeholder="1970"
                        min="1900" max='{new Date().getFullYear();}'
                        onChange={this.addBirthyearToState} />
                    <select name="klacht" id="type" onChange={this.addTypeToState} >
                        <option value="Controle">Controle</option>
                        <option value="Boren">Boren</option>
                        <option value="Kronen">Kronen</option>
                        <option value="Mondhygienist">Mondhygienist</option>
                    </select>
                    <button
                        onClick={() => (this.state.rating > 0 && this.state.rating <= 5) ? this.props.addNewAppointmentTo(this.state) : alert("niet goed ingevuld")}>toevoegen
                    </button>
                </div>

            </div>
        )
    }
}
export default Inputnewappointment;