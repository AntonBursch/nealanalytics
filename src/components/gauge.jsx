import React from 'react';
import { Speedometer } from './speedometer';

export function Gauge(props) {
    return (
        <React.Fragment>
            <div style={{
                backgroundColor: "#000000df",
                width: "50%",
                marginBottom: 35,
                padding: 50
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <div style={{
                        width: "70px",
                        height: "70px",
                        backgroundColor: props.gaugeColor,
                        borderRadius: "50%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <img src={props.gaugeIcon} alt="" />
                    </div>
                    <div>

                    </div>
                </div>
                <Speedometer
                    displayValue={props.displayValue}
                    rotation={props.rotation}
                    innerCircle={props.innerCircle}
                    outerCircle={props.outerCircle}
                    needle={props.needle}
                    speedArc={props.speedArc}
                />
            </div>
        </React.Fragment>
    );
}