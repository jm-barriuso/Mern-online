import './App.css';
import Adverisement from './components/Advertisement/Adverisement';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import Subcontent from './components/Subcontent/Subcontent';
import Home from './view/home/Home';




function App() {
  return (
    <div className="App">
      <Home>
        <Header/>
        <div className="App-container">
          <Navigation/>
          <Main>
            <div className="App-subcontainer">
            <Subcontent/>
            <Subcontent/>
            <Subcontent/>
            </div>
            <Adverisement/>
          </Main>
        </div>
      </Home>
    </div>
  );
}

export default App;
