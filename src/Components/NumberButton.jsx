function NumberButton({ value, display, onClickCallback }) {
    return (
        <div className="button-digit" onClick={() => onClickCallback(value)}>
            {display}
        </div>
    );
}

export default NumberButton;
