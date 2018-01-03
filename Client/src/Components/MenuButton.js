import React, { Component } from 'react';

class MenuButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div
        id='hamburgerButton'
        className={this.props.menu}
        onClick={(event) => {
          this.props.hamburgerClick(event);
        }}
      >
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
    );
  }
}

export default MenuButton;