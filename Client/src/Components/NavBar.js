import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Projects from './Projects';
import Resume from './Resume';

class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='navbar-aboutme'>
          <Link to="/aboutme" className='navbar-text'>About Me</Link>
        </div>
        <div className='navbar-projects'>
          <Link to="/projects" className='navbar-text'>Projects</Link>
        </div>
        <div className='navbar-resume'>
          <Link to="/resume" className='navbar-text'>Resume</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;