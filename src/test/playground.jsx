import React, { Component } from 'react';

export class Clock extends Component {

  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentWillMount() {
    this.tick();
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  render() {
    return <p>The current time is {this.state.time.toLocaleTimeString()}</p>
  }
}