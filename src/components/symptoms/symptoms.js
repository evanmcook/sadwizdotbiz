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

  </div>
  )
}

export default Symptoms;