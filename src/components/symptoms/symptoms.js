import React, { Component } from 'react';
import './symptoms.css';

class Symptoms extends Component {
  constructor(props) {
    super(props);
    this.updateHat = this.updateHat.bind(this);
    this.updateRobe = this.updateRobe.bind(this);
    this.updateShoes = this.updateShoes.bind(this);
  }

  updateHat(e) {
    this.props.updateHat(e.target.value);
  }
  
  updateRobe(e) {
    this.props.updateRobe(e.target.value);
  }

  updateShoes(e) {
    this.props.updateShoes(e.target.value);
  }
  
  render() {
    return (
    <div className="symptoms-container ">
      symptoms selection
      <div>
        <select name="hats" id="hats" onChange={this.updateHat}>
          <option value="hat001">hat1</option>
          <option value="hat002">hat2</option>
          <option value="hat003">hat3</option>
          <option value="hat004">hat4</option>
        </select>
        <label for="hats">hat</label>
      </div>
      <div>
        <select name="robes" id="robes" onChange={this.updateRobe}>
          <option value="robe001">robes1</option>
          <option value="robe002">robes2</option>
          <option value="robe003">robes3</option>
          <option value="robe004">robes4</option>
          <option value="robe005">robes5</option>
          <option value="robe006">robes6</option>
        </select>
        <label for="robes">robe</label>
      </div>
      <div>
        <select name="shoes" id="shoes" onChange={this.updateShoes}>
          <option value="shoes001">shoes1</option>
          <option value="shoes002">shoes2</option>
          <option value="shoes003">shoes3</option>
          <option value="shoes004">shoes4</option>
          <option value="shoes005">shoes5</option>
        </select>
        <label for="shoes">shoes</label>
      </div>
    </div>
    )
  }
}

export default Symptoms;