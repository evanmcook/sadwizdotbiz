import React, { Component } from 'react';
import './wizardscreen.css';

class WizScreen extends Component {
  render() {
    return (
    <div className="screen">
      <img src={'/artAss/hats/' + this.props.state.hat + '.png'} alt='wizard hat'/> 
      <img src={'/artAss/robes/' + this.props.state.robe + '.png'} alt='wizard robe'/> 
      <img src={'/artAss/shoes/' + this.props.state.shoes + '.png'} alt='wizard shoes'/> 
    </div>
    )
  }
}

export default WizScreen;