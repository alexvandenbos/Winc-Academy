import React from 'react'

class InputSong extends React.Component {
    constructor() {
        super()
        this.state = {
            SongItems: [
                { title: "", artist: "", genre: "", rating: "" }
            ]
        }
        this.addTitleToState = this.addTitleToState.bind(this)
        this.addArtistToState = this.addArtistToState.bind(this)
        this.addGenreToState = this.addGenreToState.bind(this)
        this.addRatingToState = this.addRatingToState.bind(this)
    }
    addTitleToState(event) {
        //console.log(this.state.SongItems)
        this.setState({
            SongItems: [{ title: event.target.value }]
        });
    }
    addArtistToState(event) {
        //console.log(this.state)
        this.setState({
            SongItems: [{ artist: event.target.value }]
        });
    }
    addGenreToState(event) {
        //console.log(this.state)
        this.setState({
            SongItems: [
                { genre: event.target.value }
            ]
        });
    }
    addRatingToState(event) {
        //console.log(this.state)
        this.setState({
            SongItems: [
                { rating: event.target.value }
            ]
        });
    }
    render() {
        return (
            <div className="Container">
                <h1>entire state {console.log(this.state.SongItems[0])}</h1>
                <input
                    placeholder="title to add"
                    type="text"
                    onChange={this.addTitleToState} />
                <p>title: {this.state.SongItems[0].title}</p>
                <input
                    placeholder="artist to add"
                    type="text"
                    onChange={this.addArtistToState} />
                <p>artist: {this.state.SongItems[0].artist}</p>
                <input
                    placeholder="genre to add"
                    type="text"
                    onChange={this.addGenreToState} />
                <p>genre: {this.state.SongItems[0].genre}</p>
                <input
                    placeholder="rating to add"
                    type="number"
                    onChange={this.addRatingToState} />
                <p>rating: {this.state.SongItems[0].rating}</p>
                <button
                    onClick={() =>
                        this.props.addSongToMySongList(this.state.songItems)}>add
                </button>
            </div>
        )
    }
}
export default InputSong