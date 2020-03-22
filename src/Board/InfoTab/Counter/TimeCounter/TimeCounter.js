import React, { Component } from 'react';
import Counter from '../Counter';

class TimeCounter extends Component {
        timer;

        componentDidUpdate() {
            if(this.props.timeIsOn) {
                if(!this.timer) {
                    this.timer = setInterval(() => {
                        this.props.timeTick()
                    }, 1000);
                }
            } else {
                clearInterval(this.timer);
                this.timer = false;
            }
        }

        render() {
            return (
                <section>
                    <Counter value={this.props.time} />
                </section>
            );
        }
}

export default TimeCounter;