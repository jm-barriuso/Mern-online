
import { useState } from 'react';
import './App.css';
import BoxesForm from './components/BoxesForm';
import Boxes from './view/Boxes';

function App() {

  const [boxes, setBoxes] = useState([]);
  
  return (
    <div className="App">
        <BoxesForm boxes={boxes} setBoxes={setBoxes} />
        <Boxes boxes={boxes}/>
    </div>
  );
}

export default App;
