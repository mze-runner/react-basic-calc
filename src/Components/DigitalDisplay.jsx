function DigitalDisplay({ userInputDisplay }) {
    const userInputDisplayShow = !userInputDisplay ? '0' : userInputDisplay;
    return (
        <div className="digital-display">
            <div>{userInputDisplayShow}</div>
        </div>
    );
}

export default DigitalDisplay;
