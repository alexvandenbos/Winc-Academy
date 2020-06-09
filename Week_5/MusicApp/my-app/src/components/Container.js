import React from 'react';
import InputSong from './Input'
import SongList from './SongList'

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            SongItems: [
                { id: 1, title: "Blinding lights", artist: "Henk", genre: "Rock", rating: 4 },
                { id: 2, title: "Siniorita", artist: "Peter", genre: "Jazz", rating: 3 },
                { id: 3, title: "Maneater", artist: "Marjolijn", genre: "Rock", rating: 5 },
                { id: 4, title: "Invisible lights", artist: "Frederik Hendrik", genre: "Klassiek", rating: 4 }
            ],
            HiddenGenreItems: [],
            HiddenRatingItems: []
        }
        this.addSongToMySongList = this.addSongToMySongList.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.filterGenre = this.filterGenre.bind(this)
        this.filterRating = this.filterRating.bind(this)
    }
    addSongToMySongList = function (value) {
        let NewInputIndex = Math.max(...this.state.SongItems.map(item => item.id)) + 1
        value.id = NewInputIndex
        this.setState(prevState => ({
            SongItems: prevState.SongItems.concat([value])
        }))
    }
    filterGenre(value) {
        console.log(value.target.value)
        if (value.target.value === "All") {
            console.log("hier")
            this.setState({
                HiddenGenreItems: []
            })
        } else {
            let selectedItems = this.state.SongItems.filter(songs => songs.genre !== value.target.value).map(item => item.id)
            this.setState({
                HiddenGenreItems: selectedItems
            })
        }
        console.log(this.state)
    }

    filterRating(value) {
        console.log(value.target.value)
        if (value.target.value === "All") {
            this.setState({
                HiddenRatingItems: []
            })
        } else {
            console.log(value.target.value)
            let selectedItems = this.state.SongItems.filter(songs => String(songs.rating) !== value.target.value).map(item => item.id)
            this.setState({
                HiddenRatingItems: selectedItems
            })
        }
        console.log(this.state)
    }

    deleteItem(id) {
        this.setState(prevState => ({
            SongItems: prevState.SongItems.filter(item => item.id !== id)
        }));
    }
    render() {
        return (
            <div className="Container">
                <InputSong className="InputSong" addSongToMySongList={this.addSongToMySongList} />
                <SongList className="SongList"
                    HiddenItems={this.state.HiddenRatingItems.concat(this.state.HiddenGenreItems)}
                    SongItems={this.state.SongItems} deleteItem={this.deleteItem}
                    filterGenre={this.filterGenre} filterRating={this.filterRating} />
            </div>
        )
    }
}
export default Container
