import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div className="main aboutme" id="aboutme">
        <div id='aboutme-bar'>
          <img
            className="portfolio-picture"
            src={require("../../Static/img/portfoliopic.jpg")}
          />
          <div id='aboutme-assets'>
            <h1 className='aboutme-name' id="primary-text">
              Hi, I'm Joe
            </h1>
            <div id='aboutme-links'>
              <a href='https://github.com/joeekimm'><img id='img-links' src={require('../../Static/img/github.png')}/></a>
              <a href='https://linkedin.com/in/joeyubinkim'><img id='img-links' src={require('../../Static/img/linkedin.png')}/></a>
              <a href='mailto:joeekimm@gmail.com'><img id='img-links' src={require('../../Static/img/Gmail.png')}/></a>
              <a href='https://docs.google.com/document/d/1MABp9-d0F0kiK3UxakOojjNBqcb1F0bAkDIWfeOLcyc/edit?usp=sharing'><img id='img-links' src={require('../../Static/img/resume.png')}/></a>
            </div>
          </div>
        </div>
        <p className='aboutme-text'id="tertiary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem
          nisl, tristique blandit ipsum et, malesuada efficitur diam.
          Pellentesque accumsan, ligula ac laoreet blandit, magna magna ornare
          quam, nec iaculis nisl purus et urna. Donec at tristique felis. Cras
          blandit augue in varius suscipit. Quisque a lacus tincidunt justo
          facilisis convallis. Vivamus sagittis ante at tincidunt blandit. Nam
          rutrum turpis metus, eget volutpat leo posuere sit amet. Curabitur
          viverra convallis velit, quis dignissim enim scelerisque vitae.
          Praesent posuere tellus ex, a vestibulum tortor tempor et. Donec in
          rutrum nunc. Nam placerat facilisis maximus. Sed aliquet pellentesque
          neque ut faucibus. Suspendisse ac ornare sapien, eu tempus sapien. Ut
          quam dui, ultricies nec finibus ut, condimentum nec orci. Nullam ut
          condimentum dui. Donec sed blandit ante.
        </p>
      </div>
    );
  }
}

export default AboutMe;
