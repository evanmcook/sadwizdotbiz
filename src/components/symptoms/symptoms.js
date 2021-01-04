import React from 'react';
import './symptoms.css';

function Symptoms() {
  return (
  <div className="symptoms-container ">
    symptoms selection
    <div>
      <select name="hats" id="hats">
        <option value="hat1">hat1</option>
        <option value="hat2">hat2</option>
        <option value="hat3">hat3</option>
        <option value="hat4">hat4</option>
      </select>
      <label for="hats">hat</label>
    </div>
    <div>
      <select name="robes" id="robes">
        <option value="robe1">robe1</option>
        <option value="robe2">robe2</option>
        <option value="robe3">robe3</option>
        <option value="robe4">robe4</option>
        <option value="robe5">robe5</option>
        <option value="robe6">robe6</option>
      </select>
      <label for="robes">robe</label>
    </div>
    <div>
      <select name="shoes" id="shoes">
        <option value="shoes1">shoes1</option>
        <option value="shoes2">shoes2</option>
        <option value="shoes3">shoes3</option>
        <option value="shoes4">shoes4</option>
        <option value="shoes5">shoes5</option>
      </select>
      <label for="shoes">shoes</label>
    </div>
  </div>
  )
}

export default Symptoms;