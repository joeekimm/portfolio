import React, { Component } from "react";

import NavBar from "./NavBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.click = this.click.bind(this);
  }

  componentDidMount() {
    this.refs.AppComponent.addEventListener('click', this.click);
  }

  click() {
    console.log('clicked');
  }

  render() {
    return (
      <div ref='AppComponent'>
        <NavBar />
      </div>
    );
  }
}

export default App;
