import React, { Component } from "react";
import TweenLite from 'gsap';
import scrollTo from '../../../node_modules/gsap/ScrollToPlugin';
import Typist from 'react-typist';
import Particles from 'react-particles-js';
import particlesJSON from '../../Static/assets/particles.json';

import NavBar from "./NavBar";
import AboutMe from './AboutMe';
import Projects from './Projects';
import MenuButton from './Assets/MenuButton';
// import Metronome from './Metronome';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: "menu-container",
      visible: false
    };

    this.toTop = this.toTop.bind(this);
    this.handlePageScroll = this.handlePageScroll.bind(this);
    this.hamburgerClick = this.hamburgerClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
  }

  toTop(id) {
    this.handlePageScroll(id);
  }

  handlePageScroll(id) {
    console.log(id);
    TweenLite.to(window, 0.75, { scrollTo: `#${id}` });
  }

  hamburgerClick(event) {
    this.toggleMenu();

    // console.log("hamburger clicked");
    let css = this.state.menu === "menu-container" ? "change" : "menu-container";
    this.setState({ menu: css });
    // event.stopPropagation();
  }

  toggleMenu() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    let visibility = "hide";

    if (this.state.visible) {
      visibility = "show";
    }

    return (
      <div className='main' id={visibility}>
        <NavBar hamburgerClick={this.hamburgerClick} menuVisibility={this.state.visible} handlePageScroll={this.handlePageScroll} toTop={this.toTop}/>
        <MenuButton hamburgerClick={this.hamburgerClick} menu={this.state.menu}/>
        <div className='main home' id='home'>
          {/* <Metronome /> */}
          {/* <Particles params={particlesJSON} style={{position: 'absolute', top: '0', left: '0', backgroundColor: 'black', zIndex: '-1'}} height={'100vh'} width={'100vw'}/> */}
          <div className='typist-container'>
            <Typist className='typist' avgTypingDelay={100} startDelay={700} cursor={{show: false}} onTypingDone={() => console.log('typing done')}>
              <h1 id='primary-text' className='typist'>Joe (Yubin) Kim</h1>
              <h2 id='primary-text' className='typist'>Software Engineer</h2>
            </Typist>
          </div>
        </div>
        <AboutMe />
        <Projects visibility={visibility}/>
      </div>
    );
  }
}

export default App;
