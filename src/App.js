import React, { Component } from 'react';
import './App.css';
import WizScreen from './components/wizardscreen/wizardscreen'
import Symptoms from './components/symptoms/symptoms';
import Diagnosis from './components/diagnosis/diagnosis';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hat: 'hat001',
      robe: 'robe001', 
      shoes: 'shoes001'
    };
    this.handleHatUpdate = this.handleHatUpdate.bind(this);
    this.handleRobeUpdate = this.handleRobeUpdate.bind(this);
    this.handleShoesUpdate = this.handleShoesUpdate.bind(this);
  }

  handleHatUpdate(hatVal) {
    this.setState({ hat: hatVal });
    console.log('tate:', this.state);
  }

  handleRobeUpdate(robeVal) {
    this.setState({ robe: robeVal });
  }

  handleShoesUpdate(shoesVal) {
    this.setState({ shoes: shoesVal });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>sad wiz dot biz</h1>
          <h2>the #1 sad wizard simulator on the impernet</h2>
        </header>
        <main>
          <div className="main">
            <WizScreen state={this.state}/>
            <Symptoms updateHat={this.handleHatUpdate} updateRobe={this.handleRobeUpdate} updateShoes={this.handleShoesUpdate}/>
            <Diagnosis/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
