import React from 'react';

class Inputfield extends React.Component {
    constructor(props) {
        super()
        this.state = {
            fullName: ""
        }
        this.addItemChange = this.addItemChange.bind(this)
    }
    addItemChange(event) {
        this.setState({
            fullName: event.target.value
        });
    }
    render() {
        return (
            <div>
                <p>test: {this.state.fullName}</p>
                <input placeholder="item to add" type="text" onChange={this.addItemChange} />
                <button onClick={() => this.props.addItemtoGroceryItems(this.state.fullName)}>add</button>
            </div>
        )
    }
}
export default Inputfield


