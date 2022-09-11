function DigitalDisplay({ displayUserInput, displayLog, displayResult }) {
    return (
        <div className="digital-display">
            <div className="display-log">{displayLog}</div>
            <div className="display">{displayUserInput}</div>
            <div className="display-temp">{displayResult}</div>
        </div>
    );
}

export default DigitalDisplay;
