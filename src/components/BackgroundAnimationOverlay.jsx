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
        constructor(props) {
            super(props);

            this.canvas = null;
            this.context = null;
            this.width = null;
            this.height = null;

            this.imageWidth = null;
            this.imageHeight = null;
            this.starCenterX = null;
            this.starCenteerY = null;

            this.animate = this.animate.bind(this);
        }

        render() {
            return(
                <canvas id="background-animation"></canvas>
            );
        }

        componentDidMount() {
            this.canvas = document.getElementById("background-animation");
            this.context = this.canvas.getContext("2d");
            this.width = this.canvas.getAttribute("width");
            this.height = this.canvas.getAttribute("height");

            this.animate();
        }

        animate() {
            this.context.clearRect(0, 0, this.width, this.height);



            requestAnimationFrame(this.animate);
        }
    }
}

export { GenerateBackgroundAimationOverlay };