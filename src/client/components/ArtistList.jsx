import React from 'react';
import styled from 'styled-components';
import Artist from './Artist.jsx';

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: black
`;

const Icon = styled.div`
  background-color: black;
  color: white;
  padding: 32px;
  margin: 0 auto;
  max-width: 1480px;
  letter-spacing: .015em;
`;

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
      <List>
        {this.state.artists.map((artistdata) => {
          const { _id } = artistdata;
          return <Icon><Artist key={_id} artist={artistdata} /></Icon>;
        })}
      </List>
    );
  }
}


export default ArtistList;
