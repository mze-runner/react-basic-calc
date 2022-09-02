// className="button-operator"

import { useState } from 'react';
function DigitalButton({
    value,
    display,
    onClickCallback,
    backgroundColor,
    hoverColor,
}) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const defaultBackground = 'rgb(39, 55, 59)';
    const defaultHover = 'rgb(30, 43, 46)';

    const displayBackgroundColor = !backgroundColor
        ? defaultBackground
        : backgroundColor;
    const displayHoverColor = !hoverColor ? defaultHover : hoverColor;

    const style = {
        border: '0.5px solid rgba(92, 92, 92, 0.137)',
        height: '100px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '30px',
        cursor: 'pointer',
    };

    const buttonStyle = Object.assign(style, {
        backgroundColor: isHover ? displayHoverColor : displayBackgroundColor,
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

export default DigitalButton;
