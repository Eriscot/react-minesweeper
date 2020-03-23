import React from 'react';
import Counter from '../Counter';

const MinesLeft = (props) => {
    return (
        <section id='MinesLeft'>
            <Counter {...props} />
        </section>
    );
}

export default MinesLeft;