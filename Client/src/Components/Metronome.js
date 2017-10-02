import React, { Component } from 'react';

const click1 = require('../../Static/audio/click1.wav');
const click2 = require('../../Static/audio/click2.wav');

class Metronome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };

    this.handleBpmChange = this.handleBpmChange.bind(this);
    this.startStop = this.startStop.bind(this);
    this.beat1 = new Audio(click1);
    this.beat2 = new Audio(click2);
  }

  handleBpmChange (event) {
    const bpm = event.target.value;
    this.setState({ bpm: bpm }, () => console.log(this.state.bpm));
  }

  startStop() {
    this.beat1.play();
   }

  render() {
    return (
      <div className="metronome">
        <div className="bpm-slider">
          <div>{this.state.bpm} BPM</div>
          <input
            type="range"
            min="60"
            max="240"
            value={this.state.bpm} 
            onChange={event => this.handleBpmChange(event)}/>
        </div>
        <button onClick={this.startStop}>
          {this.state.playing ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

export default Metronome;