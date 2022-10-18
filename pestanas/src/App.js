import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Tabs from './components/Tabs';

function App() {
  
  const [tabs, setTabs] = useState([
    {
      name:'tab1',
      content:'Tab 1 content is showing here',
      status:'active'
    },
    {
      name:'tab2',
      content:'Tab 2 content is showing here',
      status:''
    },
    {
      name:'tab3',
      content:'Tab 3 content is showing here',
      status:''
    }

  ]);
  
  
  return (
    <div className="App">
      <Tabs tabs={ tabs } setTabs={ setTabs }/>
    </div>
  );
}

export default App;
