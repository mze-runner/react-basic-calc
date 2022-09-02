// className="button-operator"

import { useState } from 'react';

export const KEY_APPEAL = {
    NUMBER: 'number',
    OPERATION: 'operation',
};

function OperatorButton({ value, display, onClickCallback, appeal }) {
    const [isHover, setIsHover] = useState(false);

    // const numberHover = {
    //     backgroundColor: isHover ? 'rgb(39, 55, 59)' : 'rgb(30, 43, 46)',
    // };
    // const operationHover = {
    //     backgroundColor: isHover ? 'rgb(30, 43, 46)' : 'orange',
    // };

    const resolveAppelType = (a) => {
        if (a === KEY_APPEAL.OPERATION) {
            return KEY_APPEAL.OPERATION;
        }
        return KEY_APPEAL.NUMBER;
    };
    const keyAppeal = resolveAppelType(appeal);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const style = {
        //backgroundColor: isHover ? 'rgb(30, 43, 46)' : 'orange',
        border: '0.5px solid rgba(92, 92, 92, 0.137)',
        height: '100px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '30px',
        cursor: 'pointer',
    };

    const buttonStyle =
        keyAppeal === KEY_APPEAL.OPERATION
            ? Object.assign(style, {
                  backgroundColor: isHover ? 'rgb(30, 43, 46)' : 'orange',
              })
            : Object.assign(style, {
                  backgroundColor: isHover
                      ? 'rgb(30, 43, 46)'
                      : 'rgb(39, 55, 59)',
              });

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onClickCallback(value)}
            style={buttonStyle}
        >
            {display}
        </div>
    );
}

export default OperatorButton;
