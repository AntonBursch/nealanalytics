import React from 'react';
import { Speedometer } from './speedometer';

export function CPU() {
  return (
    <Speedometer
      innerCircle="central-circle.svg"
      outerCircle="blue-zone (1).svg"
    />
  );
}