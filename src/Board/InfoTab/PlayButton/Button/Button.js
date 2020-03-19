import React from 'react';

const Button = props => {
    return (
        <img src={props.condition} 
            onMouseDown={(e) => props.onMouseDown()}
            onMouseUp={(e) => props.onMouseUp()}
            alt='' 
        />);
};

export default Button;