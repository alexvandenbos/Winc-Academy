import React from 'react'

class InputSong extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            artist: "",
            genre: "",
            rating: ""
        }
        this.addTitleToState = this.addTitleToState.bind(this)
        this.addArtistToState = this.addArtistToState.bind(this)
        this.addGenreToState = this.addGenreToState.bind(this)
        this.addRatingToState = this.addRatingToState.bind(this)
    }
    addTitleToState(event) {
        this.setState({
            title: event.target.value
        });
    }
    addArtistToState(event) {
        //console.log(this.state)
        this.setState({
            artist: event.target.value
        });
    }
    addGenreToState(event) {
        //console.log(this.state)
        this.setState({
            genre: event.target.value
        });
    }
    addRatingToState(event) {
        //console.log(this.state)
        this.setState({
            rating: event.target.value
        });
    }
    render() {
        return (
            <div className="Container">
                <h1>My Songs</h1>
                <input
                    placeholder="title to add"
                    type="text"
                    onChange={this.addTitleToState} />
                <input
                    placeholder="artist to add"
                    type="text"
                    onChange={this.addArtistToState} />
                <select name="cars" id="cars" onChange={this.addGenreToState} >
                    <option value="Rock">Rock</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Pop">Pop</option>
                    <option value="Klassiek">Klassiek</option>
                </select>
                <input
                    min="1"
                    max="5"
                    name="rating"
                    placeholder="rating to add"
                    type="number"
                    onChange={this.addRatingToState} />
                <button
                    onClick={() => (this.state.rating > 0 && this.state.rating <= 5) ? this.props.addSongToMySongList(this.state) : alert("tusen 0 en 5 AUB")}
                >add
                    </button>
            </div>
        )
    }
}
export default InputSong