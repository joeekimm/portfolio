import React, { Component } from 'react';

import click1 from '../../Static/audio/click1.wav';
import click2 from '../../Static/audio/click2.wav';

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
    this.playClick = this.playClick.bind(this);
    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }

  handleBpmChange (event) {
    const bpm = event.target.value;
    
    if(this.state.playing) {
      // Stop the old timer and start a new one
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);
  
      // Set the new BPM, and reset the beat counter
      this.setState({
        count: 0,
        bpm
      });
    } else {
      // Otherwise just update the BPM
      this.setState({ bpm });
    }
  }

  startStop() {
    // this.click1.play();
    if(this.state.playing) {
      // Stop the timer
      clearInterval(this.timer);
      this.setState({
        playing: false
      });
    } else {
      // Start a timer with the current BPM
      this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
      this.setState({
        count: 0,
        playing: true
        // Play a click "immediately" (after setState finishes)
      }, this.playClick);
    }
   }

   playClick() {
    const { count, beatsPerMeasure } = this.state;
  
    // The first beat will have a different sound than the others
    if(count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }
  
    // Keep track of which beat we're on
    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  }

  render() {
    return (
      <div className="metronome">
        <div className="bpm-slider">
          <div>{this.state.bpm} BPM</div>
          <input
            type="range"
            min="60"
            max="200"
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