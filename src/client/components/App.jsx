import React from 'react';
import styled from 'styled-components';

import ArtistList from './ArtistList.jsx';

const AppStyle = styled.div`
  min-height: 100%;
  background-color: black;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistid: '1',
      artistinfo: {},
    };
    this.fetchArtistData = this.fetchArtistData.bind(this);
  }

  componentDidMount() {
    this.fetchArtistData();
  }

  fetchArtistData() {
    // need to find an initial artist.
    fetch(`http://localhost:3000/data/artist?id=${this.state.artistid}`).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ artistinfo: data });
    });
  }


  render() {
    let component;
    if (Object.keys(this.state.artistinfo).length === 0) {
      component = <div>empty</div>;
    } else {
      component = <ArtistList artist={this.state.artistinfo} />;
    }
    return (
      <AppStyle>
        {component}
      </AppStyle>
    );
  }
}
export default App;
