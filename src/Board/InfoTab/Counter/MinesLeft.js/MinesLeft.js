import React from 'react';
import Counter from '../Counter';
import './MinesLeft.css';

const MinesLeft = (props) => {
    return (
        <section id='MinesLeft'>
            <Counter {...props} />
        </section>
    );
}

export default MinesLeft;