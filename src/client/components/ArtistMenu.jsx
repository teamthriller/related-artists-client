import React from 'react';
import styled from 'styled-components';


class ArtistMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.Menu = '';
  }


  updatestyle() {
    this.Menu = styled.ul`
      background-color: rgb(50,50,50);
      color: rgb(180,180,180);
      position: fixed;
      z-index: 2;
      top: ${this.props.pos.top};
      left: ${this.props.pos.left};
    `;
  }

  render() {
    this.updatestyle();
    const { Menu } = this;
    return (
      <div className="contextMenu">
        <Menu className="menu-options">
          <li className="menu-option">Start Radio</li>
          <li className="menu-option">Save to Your Library</li>
          <li className="menu-option">Copy Artist Link</li>
        </Menu>
      </div>
    );
  }
}

export default ArtistMenu;
