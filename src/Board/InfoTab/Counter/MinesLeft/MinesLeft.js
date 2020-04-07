import React from 'react';
import CounterComponent from '../CounterComponent';

const MinesLeft = (props) => {
    return (
        <section id='MinesLeft'>
            <CounterComponent {...props} />
        </section>
    );
}

export default MinesLeft;