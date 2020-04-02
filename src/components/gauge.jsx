import React from 'react';
import { Speedometer } from './speedometer';

export function Gauge(props) {
    return (
        <React.Fragment>
            <div style={{
                backgroundColor: "#000000df",
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
                <div style={{ padding: "30px 0" }}>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: "-15px",
                        marginLeft: "-15px"
                    }}>
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
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                fontFamily: "SegoePro",
                                fontWeight: "700",
                                borderRadius: "35px",
                                border: "2px solid #fff",
                                textTransform: "uppercase",
                                color: "#fff",
                                cursor: "pointer",
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                transition: "all .4s ease-in-out",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "10px 30px",
                                marginBottom: "20px",
                                width: "130px"
                            }}>
                                Start
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                fontFamily: "SegoePro",
                                fontWeight: "700",
                                borderRadius: "35px",
                                border: "2px solid #fff",
                                textTransform: "uppercase",
                                color: "#fff",
                                cursor: "pointer",
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                transition: "all .4s ease-in-out",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "10px 30px",
                                marginBottom: "20px",
                                width: "130px"
                            }}>
                                Stop
                            </div>
                            <div style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "#fff",
                                textTransform: "capitalize",
                                marginTop: "30px",
                                marginBottom: "15px",
                            }}>
                                MEDIAN LATENCY {props.medianLatency} MS
                            </div>
                        </div>
                    </div>
                </div>
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
                    <div style={{ color: "#fff" }}>Top Quark = {props.topQuarkResults} Results</div>
                    <div style={{ color: "#fff" }}>Non - Top Quark = {props.nonTopQuarkResults} Results</div>
                </div>
            </div>
        </React.Fragment>
    );
}