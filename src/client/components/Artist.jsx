import React from 'react';
import styled from 'styled-components';

// import logo from '../../../public/playicon.png';

const ImageStyle = styled.div`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: white;
  overflow: hidden;
  alignitems: 'center';
`;
const TextStyle = styled.div`
  font-size: 2em;
  width: 150px;
  text-align: center;
`;

const Image = styled.img`
  position: relative;
  height: 200px;
  width: 200px;
  top: 0;
  left: 0;
  z-index: 1;
`;

const PlayButtonImage = styled.img`
  position: relative;
  top: -95%;
  left: 35%;
  width: 30%;
  height: 30%;
  z-index: 1;
`;

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.handlehoverenter = this.handlehoverenter.bind(this);
    this.handlehoverleave = this.handlehoverleave.bind(this);
  }

  handlehoverenter() {
    const newstate = true;
    this.setState({ hovered: newstate });
  }

  handlehoverleave() {
    const newstate = false;
    this.setState({ hovered: newstate });
  }

  // render() {
  //   let opacity = 0;
  //   if (this.state.hovered) {
  //     opacity = 0.7;
  //   }
  //   return (
  //     <div
  //       onMouseEnter={this.handlehoverenter}
  //       onMouseLeave={this.handlehoverleave}
  //     >
  //       <ImageStyle>
  //         <Image
  //           src={this.props.artist.image}
  //           alt="related artist"
  //           style={{ opacity: 1 - opacity }}
  //           height="100%"
  //           width="100%"
  //         />
  //         <PlayButtonImage
  //           src="/icon"
  //           alt="play"
  //           style={{ opacity }}
  //           height="30%"
  //           width="30%"
  //         />
  //       </ImageStyle>
  //       <TextStyle>{this.props.artist.name}</TextStyle>
  //     </div>
  //   );
  // }
  render() {
    let opacity = 0;
    if (this.state.hovered) {
      opacity = 0.7;
    }
    return (
      <div
        onMouseEnter={this.handlehoverenter}
        onMouseLeave={this.handlehoverleave}
      >
        <ImageStyle>
          <Image
            src={this.props.artist.artist_image}
            alt="related artist"
            style={{ opacity: 1 - opacity }}
            height="100%"
            width="100%"
          />
          <PlayButtonImage
            src="/icon"
            alt="play"
            style={{ opacity }}
            height="30%"
            width="30%"
          />
        </ImageStyle>
        <TextStyle>{this.props.artist.artist_name}</TextStyle>
      </div>
    );
  }
}

export default Artist;
