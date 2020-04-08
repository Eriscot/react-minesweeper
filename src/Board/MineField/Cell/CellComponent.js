import React from 'react';

const CellComponent = props => {
    return (
        <img 
            src={props.value} 
            alt=''
            onContextMenu={props.handleOnContextMenu}
            onClick={props.handleOnClick}
            />
    )
}

export default CellComponent;