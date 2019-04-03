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
  alignItems: 'center',
`;
const TextStyle = styled.div`
  background-color: rgb(50,50,50);
  font-size: 2em;
  text-align: center;
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
    let component = <div />;
    if (this.state.hovered) {
      component = <div>hi</div>; // <img src='../../../public/playicon.png' alt="play" heigh="100%" width="100%"/>;
    }
    return (
      <div>
        <ImageStyle>
          <img src={this.props.artist.image} alt="related artist" height="100%" width="100%" onMouseEnter={this.handlehoverenter} onMouseLeave={this.handlehoverleave} />
          {component}
        </ImageStyle>
        <TextStyle>
          { this.props.artist.name }
        </TextStyle>
      </div>
    );
  }
}


export default Artist;
