import React from 'react';
import { Gauge } from './gauge';

export function CPU() {
  return (
    <Gauge
      displayValue={8}
      rotation={-45}
      gaugeColor="#27ae60"
      gaugeTitle="CPU"
      gaugeIcon="gauge-icon (1).svg"
      innerCircle="central-circle.svg"
      outerCircle="blue-zone (1).svg"
      needle="needle (1).svg"
      speedArc="speed-arc.svg"
    />
  );
}