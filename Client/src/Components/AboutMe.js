import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div className="main aboutme" id="aboutme">
        <img
          className="portfolio-picture"
          src={require("../../Static/img/portfoliopic.jpg")}
        />
        <h1 className="titles" id="primary-text">
          Joe Kim
        </h1>
        <p id="secondary-text">Hello, my name is Joe.</p>
        <p id="secondary-text">
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
