import React from 'react';
import { CPU } from './components/cpu';
import { FPGA } from './components/fpga';

function App() {
  return (
    <React.Fragment>
      <CPU />
      <FPGA/>
    </React.Fragment>
  );
}

export default App;
