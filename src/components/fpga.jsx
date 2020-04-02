import React from 'react';
import { Gauge } from './gauge';

export function FPGA() {
  return (
    <Gauge
      displayValue={480}
      rotation={225}
      gaugeColor="#02a4e1"
      gaugeTitle="FPGA"
      gaugeIcon="gauge-icon.svg"
      innerCircle="central-circle (1).svg"
      outerCircle="blue-zone.svg"
      needle="needle.svg"
      speedArc="speed-arc (1).svg"
    />
  );
}