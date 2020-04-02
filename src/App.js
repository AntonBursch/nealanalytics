import React from 'react';
import { CPU } from './components/cpu';
import { FPGA } from './components/fpga';

function App() {
  return (
    <React.Fragment>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 35
      }}>
        <CPU />
        <FPGA />
      </div>
    </React.Fragment>
  );
}

export default App;
