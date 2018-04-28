import React, { Component } from "react";

class Projects extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    console.log(this.props);
    return (
      <div className="main projects" id="projects" id={this.props.visibility}>
        <h1 className="titles" id="primary-text">
          Projects
        </h1>
        <div className="projects-group">
          <div className="project">
            <h2 id="secondary-text">Bartr</h2>
            <p id="secondary-text">Hello this is Bartr</p>
            <p id="secondary-text">Hello this is Bartr</p>
            <p id="secondary-text">Hello this is Bartr</p>
          </div>
          <div className="project">
            <h2 id="secondary-text">Snippr</h2>
            <p id="secondary-text">Hello this is Snippr</p>
            <p id="secondary-text">Hello this is Snippr</p>
            <p id="secondary-text">Hello this is Snippr</p>
          </div>
          <div className="project">
            <h2 id="secondary-text">Homemade</h2>
            <p id="secondary-text">Hello this is Homemade</p>
            <p id="secondary-text">Hello this is Homemade</p>
            <p id="secondary-text">Hello this is Homemade</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
