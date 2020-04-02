import React from 'react';
import { Speedometer } from './speedometer';

export function FPGA() {
  return (
    <Speedometer
      innerCircle="central-circle (1).svg"
      outerCircle="blue-zone.svg"
    />
  );
}