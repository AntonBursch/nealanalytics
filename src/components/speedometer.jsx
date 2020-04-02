import React, { useState, useMemo } from 'react';

export function Speedometer(props) {
    // -45 to 225 for a total of 270 degrees of rotation
    const [rotation, setRotation] = useState(225);
    return (
        <React.Fragment>
            <input 
                type="text" 
                defaultValue={rotation}
                onChange={(e)=>setRotation(e.target.value)}
            />

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
                }} src="speed-arc (1).svg" alt="" />
                <img style={{
                    position: "absolute",
                    width: "54px",
                    height: "68px",
                    transform: "translate(216px, 166px)"
                }} src="red-zone.svg" alt="" />
                <img style={{
                    position: "absolute",
                    width: "148px",
                    height: "148px",
                    transform: "translate(64px, 64px)"
                }} src={props.innerCircle} alt="" />
                <div style={{
                    position: "absolute",
                    width: "230px",
                    height: "16px",
                    transform: `translate(23px, 129px) rotate(${rotation}deg)`,
                    transition: "all 0.5s ease 0s"
                }}>
                    <img src="needle.svg" alt="needle" />
                </div>
            </div>
        </React.Fragment>
    );
}