import React, { Component } from 'react';
import { DeviceType } from './DeviceType';

function BackgroundSize() {
    const device = DeviceType();
    return {
        width: device === "desktop" || device === "tablet" ? "100%" : "auto",
        height: device === "mobile" ? "90%" : "auto"
    };
}

function GenerateDynamicBackground() {
    const device = DeviceType();
    const backgroundStyle = BackgroundSize();
    
    return class extends Component {
        render() {
            return (
                <img 
                    className="background" 
                    src={process.env.PUBLIC_URL + "/media/background.png"} 
                    alt=""
                    style={backgroundStyle}
                />
            );
        }
    };
}

export { GenerateDynamicBackground, BackgroundSize };
