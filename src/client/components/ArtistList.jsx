import React from 'react';
import styled from 'styled-components';
import Artist from './Artist.jsx';

// const getRelatedArtist = id => {
//   return fetch(`/data/artist?id=${id}`).then(response => {
//     return response.json();
//   });
// };

class ArtistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    };
    this.List = '';
    this.Icon = '';
    this.getRelatedArtists = this.getRelatedArtists.bind(this);
  }

  // componentDidMount() {
  //   const newstate = [];

  //   this.props.artist.relatedartists.forEach(relatedartist => {
  //     getRelatedArtist(relatedartist).then(artistdata => {
  //       const component = artistdata;
  //       newstate.push(component);
  //       this.setState({ artists: newstate });
  //     });
  //   });
  // }
  componentDidMount() {
    this.getRelatedArtists();
  }

  getRelatedArtists() {
    fetch('/artists/234142/related')
      .then(response => response.json())
      .then(artists => {
        this.setState({
          artists
        });
      });
  }

  updatesize() {
    this.List = styled.div`
      width: ${window.innerWidth};
      height: ${window.innerWidth};
      min-width: 400px;
      max-width: 1440px;
      min-height: 400px;
      max-height: 1440px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
    `;
    this.Icon = styled.div`
      color: white;
      padding: 32px;
      letter-spacing: 0.015em;
    `;
  }

  //   render() {
  //     if (this.state.artists.length === 0) {
  //       return <div>loading artists</div>;
  //     }
  //     this.updatesize();
  //     const { Icon, List } = this;
  //     return (
  //       <List>
  //         {this.state.artists.map(artistdata => {
  //           const { _id } = artistdata;
  //           return (
  //             <Icon key={_id} onContextMenu={this.props.rightclick}>
  //               <Artist artist={artistdata} />
  //             </Icon>
  //           );
  //         })}
  //       </List>
  //     );
  //   }
  // }

  render() {
    if (this.state.artists.length === 0) {
      return <div>loading artists</div>;
    }
    this.updatesize();
    const { Icon, List } = this;
    return (
      <List>
        {this.state.artists.map(artistdata => {
          const { artist_id } = artistdata;
          return (
            <Icon key={artist_id} onContextMenu={this.props.rightclick}>
              <Artist artist={artistdata} />
            </Icon>
          );
        })}
      </List>
    );
  }
}
export default ArtistList;
