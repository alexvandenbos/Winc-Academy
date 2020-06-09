import React from 'react';
import ListItem from './Listitem';

function SongList(props) {
    // console.log(props)
    return (
        <div className={props.className}>
            <h2>ik ben de songlist</h2>
            <ul>
                <li>
                    <select onChange={props.filterGenre}>
                        <option value="All">All</option>
                        <option value="Rock">Rock</option>
                        <option value="Jazz">Jazz</option>
                        <option value="Pop">Pop</option>
                        <option value="Klassiek">Klassiek</option>
                    </select>
                </li>
                <li>
                    <select onChange={props.filterRating}>
                        <option value="All">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </li>

                {props.SongItems.filter(song => !props.HiddenItems.includes(song.id)).map(song =>
                    <ListItem
                        key={song.id}
                        id={song.id}
                        title={song.title}
                        artist={song.artist}
                        genre={song.genre}
                        rating={song.rating}
                        deleteItem={props.deleteItem}
                    />)}
            </ul>

        </div>
    )
}
export default SongList