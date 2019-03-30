import React from 'react';
import Artist from './Artist.jsx';

// for an artist
const getRelatedArtist = (id) => {
  return fetch(`http://localhost:3000/data/artist?id=${id}`).then((response) => {
    return response.json();
  });
};

class ArtistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };
  }

  componentDidMount() {
    const newstate = [];
    this.props.artist.relatedartists.forEach((relatedartist) => {
      getRelatedArtist(relatedartist).then((artistdata) => {
        const component = artistdata;
        newstate.push(component);
        this.setState({ artists: newstate });
      });
    });
  }

  render() {
    if (this.state.artists.length === 0) {
      return <div>loading artists</div>;
    }
    return (
      <div>
        {this.state.artists.map((artistdata) => {
          console.log(artistdata);
          return <Artist key={artistdata._id} artist={artistdata} />;
        })}
      </div>
    );
  }
}

export default ArtistList;
