import logo from './logo.svg';
import './App.css';
import map from './img/world.svg';
import {ReactComponent as Mapa} from './img/world.svg';
import ButtonPrimary from './components/ButtonPrimary';
import Timer from './components/Timer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <ButtonPrimary label="Home"/>
            </div>
          <Timer />
        {/* <img src={map} className="App-map" alt="map" /> */}
        {/* <Mapa/>  */}
      </header>
    </div>
  );
}

export default App;
