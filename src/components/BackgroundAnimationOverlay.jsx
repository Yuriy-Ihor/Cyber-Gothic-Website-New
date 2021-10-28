import React, { Component } from 'react';
import { DeviceType } from './DeviceType';
import { BackgroundSize } from './DynamicBackground';

const backgroundData = {
    width: 1920,
    height: 1080,
    centerX: 885,
    centerY: 646
};

function GenerateBackgroundAimationOverlay() {
    const device = DeviceType();
    const backgroundStyle = BackgroundSize(); 

    return class extends Component {
        render() {
            return(
                <canvas id="background-animation"></canvas>
            );
        }

        componentDidMount() {
            this.animate();
        }

        animate() {

        }
    }
}

export { GenerateBackgroundAimationOverlay };