import React from 'react';

export function Speedometer(props) {
    return (
        <React.Fragment>
            <div style={{
                position: "relative",
                width: "275px",
                height: "235px"
            }}>
                <img style={{
                    position: "absolute"
                }} src={props.outerCircle} alt="" />
                <img style={{
                    position: "absolute"
                }} src={props.speedArc} alt="" />
                <img style={{
                    position: "absolute",
                    width: "54px",
                    height: "68px",
                    transform: "translate(216px, 166px)"
                }} src="red-zone.svg" alt="" />
                <div style={{
                    position: "absolute",
                    width: "230px",
                    height: "16px",
                    transform: `translate(23px, 129px) rotate(${props.rotation}deg)`,
                    transition: "all 0.5s ease 0s"
                }}>
                    <img src={props.needle} alt="needle" />
                </div>
                <img style={{
                    position: "absolute",
                    width: "148px",
                    height: "148px",
                    transform: "translate(64px, 64px)"
                }} src={props.innerCircle} alt="" />
                <div style={{
                    position: "absolute",
                    width: "275px",
                    height: "235px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: "translate(0, 23px)"
                }}>
                    <div style={{
                        fontFamily: "SegoePro",
                        fontWeight: "700",
                        lineHeight: "normal",
                        fontSize: "32px",
                        color: "#fff"
                    }}>
                        {props.displayValue}
                    </div>
                    <div style={{
                        fontFamily: "SegoePro",
                        fontWeight: "700",
                        lineHeight: "normal",
                        fontSize: "14px",
                        color: "#fff"
                    }}>
                        Images/Second
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}