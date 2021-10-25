import React, { Component } from 'react';
import { deviceType } from './device-type';

function GenerateDynamicBackground() {
    const device = deviceType();
    const backgroundStyle = {
        width: device === "desktop" ? "100%" : "auto",
        height: device === "mobile" ? "90%" : "auto"
    };
    
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

export { GenerateDynamicBackground };
