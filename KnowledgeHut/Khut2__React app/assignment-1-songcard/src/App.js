import React, { Component } from "react";
import SongCard from "./components/SongCard";
import songs from "./services/songs";

class App extends Component {
  state = {

  };

  render() {
    return (
      <div id="super-tunes">

      </div>
    );
  }
}

export default App;

// songs,

 // sortByRating = () => {
  //   this.setState({
  //     songs: [...this.state.songs.sort((a, b) => b.rating - a.rating)],
  //   });
  // };
  // sortByTitle = () => {
  //   this.setState({
  //     songs: [
  //       ...this.state.songs.sort((a, b) =>
  //         a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
  //       ),
  //     ],
  //   });
  // };



/* <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        <button className="st-btn" onClick={this.sortByTitle}>
          Sort By Title
        </button>
        <button className="st-btn" onClick={this.sortByRating}>
          Sort By Rating
        </button>
        <div id="song-list">
          {this.state.songs.map((song) => (
            <SongCard key={song.id} data={song} />
          ))}
        </div> */