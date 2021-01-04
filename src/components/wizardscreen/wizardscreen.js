import React, { Component } from 'react';
import './wizardscreen.css';


class WizScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="screen">
      <img src={'/artAss/hats/' + this.props.state.hat + '.png'}/> 
      <img src={'/artAss/robes/' + this.props.state.robe + '.png'}/> 
      <img src={'/artAss/shoes/' + this.props.state.shoes + '.png'}/> 
    </div>
    )
  }
}

export default WizScreen;