import React from 'react';
import calculate from '../logic/Calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <React.Fragment className="App">
      <Display />
      <ButtonPanel calculate={calculate} />
    </React.Fragment>
  );
}

export default App;
