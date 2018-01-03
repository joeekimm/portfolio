import React, { Component } from "react";

import Projects from "./Projects";
import Resume from "./Resume";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {}

  handleClick(section) {
    this.props.handlePageScroll(section);
  }

  render() {
    let visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div
        id="navbar-container"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}
      >
        <h2>
          <a
            className="nav-button"
            id="grid-aboutme"
            onClick={() => {
              this.handleClick("aboutme");
              this.props.hamburgerClick();
            }}
          >
            About Me
          </a>
        </h2>
        <h2>
          <a
            className="nav-button"
            id="grid-projects"
            onClick={() => {
              this.handleClick("projects");
              this.props.hamburgerClick();
            }}
          >
            Projects
          </a>
        </h2>
        <h2>
          <a
            className="nav-button"
            id="grid-resume"
            onClick={() => {
              this.handleClick("resume");
              this.props.hamburgerClick();
            }}
          >
            Resume
          </a>
        </h2>
        <h2>
          <a
            className="nav-button"
            id="grid-top"
            onClick={() => {
              this.props.toTop("home");
              this.props.hamburgerClick();
            }}
          >
            Top
          </a>
        </h2>
      </div>
    );
  }
}

export default NavBar;
