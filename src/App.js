import React from 'react';
import Lottery from './Lottery';


import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery name='EuroLotto' balls={8} maxNum={40}/>
      <Lottery name='MinLotto' balls={5} maxNum={10}/>
    </div>
  );
}

export default App;
