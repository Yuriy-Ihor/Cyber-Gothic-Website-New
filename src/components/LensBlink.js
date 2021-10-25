/* eslint-disable */

import React, { Fragment } from 'react';

function LensBlinkJSX(JSXElement, origin, starting_position) {

    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                starting_position: starting_position,
                origin: origin,
                WrappedJSXElement: <Fragment></Fragment>
            };
        }

        componentDidMount() {
            this.last_offset = 0;
            this.animation_running = false;
            this.wrappedJSXElement = null;

            const ref = React.createRef();

            const JSXElementWithRef = React.cloneElement(
                JSXElement,
                { ...JSXElement.props, ref: ref }
            )

            this.setState({
                WrappedJSXElement: JSXElementWithRef
            }, () => {
                this.setState({}, () => {
                    this.wrappedJSXElement = ref;
                    document.addEventListener("scroll", this.animate_scroll);
                });
            });
        }

        animate_scroll = () => {
            if (!this.animation_running) {
                this.animation_running = true;
                this.animation_loop();
            }
        }

        animation_loop = () => {
            this.wrappedJSXElement.current.style.top =
                 `${this.state.origin.top + this.state.starting_position.top}px`;

            this.wrappedJSXElement.current.style.left = 
                `${this.state.origin.left + this.state.starting_position.left}px`;

            requestAnimationFrame(this.animation_loop);
        }

        render() {
            return (
                <Fragment>
                    {this.state.WrappedJSXElement}
                </Fragment>
            )
        }
    }

}

export default LensBlinkJSX;