import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';

class Projects extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    return (
      <div className="main projects" id="projects" id={this.props.visibility}>
        <h1 className="titles" id="primary-text">Projects</h1>
        <Carousel interval={7000}>
          <Carousel.Item>
            <a href='https://github.com/joeekimm/App'>
              <img width={900} height={500} alt="900x500" src={require("../../Static/img/homemade-icon.png")} />
              <Carousel.Caption>
              <h2 id='secondary-text'>Homemade</h2>
              <p id='tertiary-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://github.com/joeekimm/bartr'>
              <img width={900} height={500} alt="900x500" src={require("../../Static/img/high-resolution-wallpaper-city-wallpaper-picture-night.jpg")} />
              <Carousel.Caption>
                <h2 id='secondary-text'>Second slide label</h2>
                <p id='tertiary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={require("../../Static/img/radioactive.jpg")} />
            <Carousel.Caption>
              <h2 id='secondary-text'>Third slide label</h2>
              <p id='tertiary-text'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Projects;

{/* <div className="main projects" id="projects" id={this.props.visibility}>
  <h1 className="titles" id="primary-text">
    Projects
  </h1>
  <div className="projects-group">
    <div className="project" id='bartr-container'>
      <h2>Bartr</h2>
      <p>Hello this is Bartr</p>
      <p>Hello this is Bartr</p>
      <p>Hello this is Bartr</p>
    </div>
    <div className="project" id='snippr-container'>
      <h2>Snippr</h2>
      <p>Hello this is Snippr</p>
      <p>Hello this is Snippr</p>
      <p>Hello this is Snippr</p>
    </div>
    <div className="project" id='homemade-container'>
      <h2>Homemade</h2>
      <p>Hello this is Homemade</p>
      <p>Hello this is Homemade</p>
      <p>Hello this is Homemade</p>
    </div>
  </div>
</div> */}