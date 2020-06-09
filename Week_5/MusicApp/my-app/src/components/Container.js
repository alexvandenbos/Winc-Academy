import React from 'react';
import InputSong from './Input'

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            SongItems: [
                { id: 1, title: "Blinding lights", artist: "Henk", genre: "Rock", rating: 4 },
                { id: 2, title: "Siniorita", artist: "Peter", genre: "Synth", rating: 3 },
                { id: 3, title: "Maneater", artist: "Marjolijn", genre: "Blues", rating: 5 },
                { id: 4, title: "Invisible lights", artist: "Frederik Hendrik", genre: "Rock", rating: 4 }
            ]
        }
        this.addSongToMySongList = this.addSongToMySongList.bind(this)
    }
    addSongToMySongList = function (value) {
        console.log(this.state.SongItems)
        console.log(value)
    }
    render() {
        return (
            <div className="Container">
                <InputSong addSongToMySongList={this.addSongToMySongList} />
            </div>
        )
    }
}
export default Container
