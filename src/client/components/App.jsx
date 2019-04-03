import React from 'react';
import styled from 'styled-components';

import ArtistList from './ArtistList.jsx';


const widthandheight = (windowsize) => {
  let size;
  const { width } = windowsize;
  if (width < 767) {
    size = { width: '33%', height: '33%' };
  } else if (width >= 767 && width < 996) {
    size = { width: '25%', height: '25%' };
  } else if (width >= 996 && width < 1200) {
    size = { width: '16%', height: '16%' };
  } else {
    size = { width: '10%', height: '10%' };
  }
  console.log(size, windowsize);
  return size;
};

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
      windowsize: { width: '10%', height: '10%' },
    };
    this.fetchArtistData = this.fetchArtistData.bind(this);
    this.updatewindow = this.updatewindow.bind(this);
  }

  componentDidMount() {
    this.fetchArtistData();
    this.updatewindow();
    window.addEventListener('resize', this.updatewindow);
  }

  updatewindow() {
    const windowsize = { width: window.innerWidth, height: window.innerHeight };
    const newwindow = widthandheight(windowsize);
    this.setState({ windowsize: newwindow });
    this.render();
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
      component = <ArtistList artist={this.state.artistinfo} size={this.state.windowsize} />;
    }
    return (
      <AppStyle>
        {component}
      </AppStyle>
    );
  }
}
export default App;
