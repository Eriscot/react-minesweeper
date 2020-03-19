import React from 'react';
import Counter from '../Counter';

const TimeCounter = (props) => {
    return (
        <section>
            <Counter {...props} />
        </section>
    );
}

export default TimeCounter;