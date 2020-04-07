import React from 'react';

const ButtonComponent = props => {
    return (
        <img src={props.condition} 
            onMouseDown={props.onMouseDown}
            onMouseUp={props.onMouseUp}
            alt='' 
        />);
};

export default ButtonComponent;