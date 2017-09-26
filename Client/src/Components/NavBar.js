import React, { Component } from 'react';

import Projects from './Projects';
import Resume from './Resume';

class NavBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      scroll: false
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
    if (!document.body.scrollTop) {
      this.setState({ scroll: false });
    } else {
      this.setState({ scroll: true });
    }
  } 
  
  render() {
    return (
      <div className={this.state.scroll ? 'nav-scroll': 'navbar-container'}>
        <button onClick={() => this.props.handlePageScroll('aboutme')}>
          <text className='navbar-text'>About Me</text>
        </button>
        <button onClick={() => this.props.handlePageScroll('projects')}>
          <text className='navbar-text'>Projects</text>
        </button>
        <button onClick={() => this.props.handlePageScroll('resume')}>
          <text className='navbar-text'>Resume</text>
        </button>
      </div>
    );
  }
}

export default NavBar;