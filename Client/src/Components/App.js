import React, { Component } from "react";

import NavBar from "./NavBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

  }

  handleScroll () {
    console.log('scrolling');
  }

  render() {
    return (
      <div style={{backgroundColor: 'blue', height: '100vh'}} onScroll={() => this.handleScroll()}>
        <NavBar />
        <div>
          {/* {this.props.children} */}
        </div>
      </div>
    );
  }
}

export default App;
