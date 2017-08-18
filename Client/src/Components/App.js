import React, { Component } from 'react';
import { Link, history } from 'react-router-dom';

import Projects from './Projects';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }
  
  render() {
    return (
      <div>
        Hello World!
        <Link to="/projects">Projects</Link>
      </div>
    );
  }
}

export default App;