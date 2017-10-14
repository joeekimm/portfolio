import React, { Component } from 'react';

import Projects from './Projects';
import Resume from './Resume';

class NavBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      scroll: false,
      highlight: ''
    };

    this.handleNavScroll = this.handleNavScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleNavScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleNavScroll);
  }

  handleNavScroll() {
    let x, y;

    if ( typeof window.pageYOffset === 'number' ) {
      x = window.pageXOffset;
      y = window.pageYOffset;
      // console.log('in offset, ', y);
    } else {
      x = document.body.scrollLeft;
      y = document.body.scrollTop;
    }

    if (y <= 10) {
      this.setState({ scroll: false });
    } else {
      this.setState({ scroll: true });
    }
  }

  handleClick(section) {
    this.props.handlePageScroll(section);
    // this.setState({ highlight: section });
  }
  
  render() {
    return (
      <div className={this.state.scroll ? 'nav-scroll': 'navbar-container'}>
        <button className={this.state.highlight === 'aboutme' ? 'nav-button-active' : 'nav-button'} id='grid-aboutme' onClick={() => this.handleClick('aboutme')}>About Me</button>
        <button className={this.state.highlight === 'projects' ? 'nav-button-active' : 'nav-button'} id='grid-projects' onClick={() => this.handleClick('projects')}>Projects</button>
        <button className={this.state.highlight === 'resume' ? 'nav-button-active' : 'nav-button'} id='grid-resume' onClick={() => this.handleClick('resume')}>Resume</button>
        <button className='nav-button' id='grid-top' onClick={() => this.props.toTop('home')}>Top</button>
      </div>
    );
  }
}

export default NavBar;