import logo from './logo.svg';
import './App.css';
import WizScreen from './components/wizardscreen/wizardscreen'
import Symptoms from './components/symptoms/symptoms';
import Diagnosis from './components/diagnosis/diagnosis';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>sad wiz dot biz</h1>
        <h2>the #1 sad wizard simulator on the impernet</h2>
      </header>
      <main>
        <div className="main">
          <WizScreen/>
          <Symptoms/>
          <Diagnosis/>
        </div>
      </main>
    </div>
  );
}

export default App;
