import React from 'react';
import styled from 'styled-components';
import ArtistMenu from './ArtistMenu.jsx';

// import logo from '../../../public/playicon.png';

const ImageStyle = styled.div`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
  alignItems: 'center';
`;
const TextStyle = styled.div`
  background-color: rgb(50,50,50);
  font-size: 2em;
  text-align: center;
`;

const Image = styled.img`
  position: relative; 
  z-index: 1;
`;

const PlayButtonImage = styled.img`
  position: relative;
  top: -65%;
  left: 35%;
  z-index: 2;
`;

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      menu: false,
    };
    this.handlehoverenter = this.handlehoverenter.bind(this);
    this.handlehoverleave = this.handlehoverleave.bind(this);
    this.handleclick = this.handleclick.bind(this);
  }

  handlehoverenter() {
    const newstate = true;
    this.setState({ hovered: newstate });
  }

  handlehoverleave() {
    const newstate = false;
    this.setState({ hovered: newstate });
  }

  handleclick() {
    const newmenu = true;
    this.setState({ menu: newmenu });
  }

  render() {
    let opacity = 0;
    if (this.state.hovered) {
      opacity = 0.7;
    }
    return (
      <div>
        <ImageStyle>
          <Image src={this.props.artist.image} alt="related artist" style={{ opacity: (1 - opacity) }} height="100%" width="100%" onMouseEnter={this.handlehoverenter} onMouseLeave={this.handlehoverleave} />
          <PlayButtonImage src="http://localhost:3000/icon" alt="play" style={{ opacity }} height="30%" width="30%" onMouseEnter={this.handlehoverenter} onMouseLeave={this.handlehoverleave} />
        </ImageStyle>
        <TextStyle>
          { this.props.artist.name }
        </TextStyle>
      </div>
    );
  }
}

export default Artist;
