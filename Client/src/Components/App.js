import React, { Component } from "react";
import TweenLite from 'gsap';
import scrollTo from '../../../node_modules/gsap/ScrollToPlugin';
import Typist from 'react-typist';
import Particles from 'react-particles-js';
import particlesJSON from '../../Static/assets/particles.json';

import NavBar from "./NavBar";
import Metronome from './Metronome';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNav: false
    };

    this.toTop = this.toTop.bind(this);
    this.handlePageScroll = this.handlePageScroll.bind(this);
    this.handleEnlarge = this.handleEnlarge.bind(this);
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    TweenLite.to(window, 0.1, { scrollTo: 'body' });
    window.pageYOffset !== 8 ? this.setState({ showNav: true}) : null;
  }

  toTop(id) {
    this.handlePageScroll(id);
    this.handleEnlarge(id);
    setTimeout(() => this.setState({ showNav: false }), 0);
  }

  handlePageScroll(id) {
    TweenLite.to(window, 0.75, { scrollTo: `#${id}` });
  }

  handleEnlarge(location) {
    const button = document.getElementsByClassName('home-button');
    if (location === 'home') {
      TweenLite.to(button, 1, { fontSize: '156.25%', opacity: 1, zIndex: 0, backgroundColor: 'transparent' });
    } else {
      TweenLite.to(button, 1, { fontSize: '1000%', opacity: 0, zIndex: -10, backgroundColor: 'white' });
      TweenLite.to(window, 0.75, { scrollTo: '#aboutme' });
    }
  }
  render() {
    return (
      <div className='main'>
        <Particles params={particlesJSON} style={{position: 'fixed', margin: '0', marginLeft: '-50%', padding: '0', zIndex: '-1'}} height={'100vh'} width={'100vw'}/>
        {this.state.showNav ? <NavBar handlePageScroll={this.handlePageScroll} toTop={this.toTop}/> : null}
        <div className='main home' id='home'>
          {/* <Metronome /> */}
          <Typist className='typist' avgTypingDelay={100} startDelay={700} cursor={{show: false}} onTypingDone={() => console.log('typing done')}>
            <h1 id='primary-text'>Joe (Yubin) Kim</h1>
            <h2 id='primary-text'>Software Engineer</h2>
            <button className='home-button' id='primary-text' onClick={() => {this.handleEnlarge('nothome'); this.setState({ showNav: true })}}>Continue</button>
          </Typist>
        </div>
        <div className='main aboutme' id='aboutme'>
          <img className='portfolio-picture' src={require('../../Static/img/portfoliopic.jpg')}/>
          <h1 className='titles' id='primary-text'>Joe Kim</h1>
          <p id='secondary-text'>Hello, my name is Joe.</p>
          <p id='secondary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem nisl, tristique blandit ipsum et, malesuada efficitur diam. Pellentesque accumsan, ligula ac laoreet blandit, magna magna ornare quam, nec iaculis nisl purus et urna. Donec at tristique felis. Cras blandit augue in varius suscipit. Quisque a lacus tincidunt justo facilisis convallis. Vivamus sagittis ante at tincidunt blandit. Nam rutrum turpis metus, eget volutpat leo posuere sit amet. Curabitur viverra convallis velit, quis dignissim enim scelerisque vitae. Praesent posuere tellus ex, a vestibulum tortor tempor et. Donec in rutrum nunc. Nam placerat facilisis maximus. Sed aliquet pellentesque neque ut faucibus. Suspendisse ac ornare sapien, eu tempus sapien. Ut quam dui, ultricies nec finibus ut, condimentum nec orci. Nullam ut condimentum dui. Donec sed blandit ante.</p>
        </div>
        <div className='main projects' id='projects'>
          <h1 className='titles' id='primary-text'>Projects</h1>
          <div className='projects-group'>
            <div className='project'>
              <h2 id='secondary-text'>Bartr</h2>
              <p id='secondary-text'>Hello this is Bartr</p>
              <p id='secondary-text'>Hello this is Bartr</p>
              <p id='secondary-text'>Hello this is Bartr</p>
            </div>
            <div className='project'>
              <h2 id='secondary-text'>Snippr</h2>
              <p id='secondary-text'>Hello this is Snippr</p>
              <p id='secondary-text'>Hello this is Snippr</p>
              <p id='secondary-text'>Hello this is Snippr</p>
            </div>
            <div className='project'>
              <h2 id='secondary-text'>Homemade</h2>
              <p id='secondary-text'>Hello this is Homemade</p>
              <p id='secondary-text'>Hello this is Homemade</p>
              <p id='secondary-text'>Hello this is Homemade</p>
            </div>
          </div>
        </div>
        <div className='main resume' id='resume'>
          <h1 className='titles' id='primary-text'>Lorem Ipsum</h1>
          <p id='secondary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem nisl, tristique blandit ipsum et, malesuada efficitur diam. Pellentesque accumsan, ligula ac laoreet blandit, magna magna ornare quam, nec iaculis nisl purus et urna. Donec at tristique felis. Cras blandit augue in varius suscipit. Quisque a lacus tincidunt justo facilisis convallis. Vivamus sagittis ante at tincidunt blandit. Nam rutrum turpis metus, eget volutpat leo posuere sit amet. Curabitur viverra convallis velit, quis dignissim enim scelerisque vitae. Praesent posuere tellus ex, a vestibulum tortor tempor et. Donec in rutrum nunc. Nam placerat facilisis maximus. Sed aliquet pellentesque neque ut faucibus. Suspendisse ac ornare sapien, eu tempus sapien. Ut quam dui, ultricies nec finibus ut, condimentum nec orci. Nullam ut condimentum dui. Donec sed blandit ante.</p>
          <p id='secondary-text'>Cras vehicula fermentum varius. Ut condimentum libero nec aliquam tempor. Cras tristique tempor libero, ac dapibus mauris cursus quis. Nam vestibulum molestie luctus. Nunc gravida enim sit amet quam efficitur auctor. Nullam eget tincidunt quam. Ut faucibus elit et elit lobortis, a fermentum quam porttitor. Quisque erat tellus, cursus sit amet dui eget, convallis suscipit odio. Aenean eleifend tempor luctus. Donec egestas, justo nec ullamcorper gravida, nisl ipsum sodales nunc, at consectetur lectus justo at mauris. Vestibulum id luctus dui, vitae tempor augue. Mauris a justo quam.</p>
          <p id='secondary-text'>Vestibulum eu tortor a justo sollicitudin elementum nec id felis. Donec rhoncus magna velit, id blandit elit ultricies a. Mauris tincidunt egestas nisl a euismod. Donec cursus libero at sem tempus, eget condimentum arcu dictum. Duis lectus lorem, semper a ornare ut, dapibus at mauris. Morbi vel sollicitudin leo, rutrum iaculis urna. Nullam venenatis posuere nunc quis auctor. Phasellus efficitur aliquam est, in accumsan leo blandit sit amet. Mauris porta non lacus eu imperdiet.</p>
          <p id='secondary-text'>Nunc a diam augue. Praesent pellentesque, nisi ac vestibulum cursus, felis felis euismod magna, sit amet efficitur ex est non eros. Aenean eget magna fermentum, elementum enim in, tristique justo. Duis tempus metus vel dolor maximus rutrum ut pellentesque turpis. Maecenas elementum lorem ac orci posuere, in pretium mi blandit. Proin varius purus enim, eget congue tellus suscipit at. Duis lobortis risus sit amet libero lobortis, vel vestibulum dolor venenatis. Maecenas bibendum aliquet quam. Mauris sit amet ex nec lorem pellentesque suscipit et nec mi. Etiam mollis, massa eget venenatis congue, dolor sapien rhoncus mi, tincidunt auctor massa tellus sed leo. In finibus justo id malesuada mollis. Nam ultrices nulla non sem sagittis fermentum. Praesent porttitor venenatis tincidunt.</p>
          <p id='secondary-text'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque non commodo quam, sit amet consequat elit. Phasellus porta orci vel aliquet aliquet. Nullam tortor lacus, feugiat eget nulla non, vestibulum hendrerit nibh. Duis ullamcorper id tellus in ultrices. In quis euismod mauris. Pellentesque varius ligula sit amet lorem imperdiet, sit amet venenatis lorem semper. Morbi maximus, diam vel placerat tincidunt, neque ligula bibendum massa, in blandit est sapien ac quam. Pellentesque ut imperdiet eros. Nulla convallis nulla vitae suscipit condimentum. Duis in consectetur magna, eu sagittis sapien. Nam sodales, ipsum sit amet vestibulum mattis, turpis odio euismod odio, at imperdiet nisi ex eget arcu.</p>
        </div>
      </div>
    );
  }
}

export default App;
