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
                    <div style={{
                        fontSize: "30px",
                        fontWeight: "700",
                        color: "#fff",
                        textTransform: "capitalize"
                    }}>
                        {props.gaugeTitle}
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
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTop: "1px solid #88878d",
                    marginTop: "100px"
                }}>
                    <div style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#fff",
                        textTransform: "capitalize",
                        marginTop: "30px",
                        marginBottom: "15px",
                    }}>
                        TOP QUARK DETECTION
                    </div>
                    <img 
                        style={{
                            border: "2px solid #88878d"
                        }}
                        src="hadron-collider-small.gif" 
                        alt="" 
                    />
                </div>
            </div>
        </React.Fragment>
    );
}