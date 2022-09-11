import { useReducer } from 'react';
import DigitalButton from '../Components/DigitalButton';
import DigitalDisplay from '../Components/DigitalDisplay';
// import { _mathOperation, convertStrToDigit } from './mathOperator';
import { OPERATORS } from './static';

const initialState = {
    // calculator inner state
    primaryNumber: undefined,
    secondaryNumber: undefined,
    lastOperation: undefined,
    isNegative: false,
    // display
    userInputDisplay: '0',
};
const ACTIONS = {
    ON_DIGITAL_BUTTON: 'onDigitalButtonClick',
    ON_OPERATION: 'onOperationClick',
    ON_EQUAL: 'onEqualClick',
    ON_DOT: 'onDotClick',
    ON_NEGATIVE: 'onNegativeClick',
    ON_PERCENT: 'onPercentClick',
    ON_CLEAR_ALL: 'onCLearAll',
    ON_CLEAR_ELEMENT: 'onClearElement',
};

const basicCalculatorReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ON_DIGITAL_BUTTON:
            const currentNumber = state.primaryNumber;
            const isCurrentNumberUndefined = typeof currentNumber === 'undefined';
            const newValue = (isCurrentNumberUndefined ? '' : currentNumber) + action.payload;
            return { ...state, primaryNumber: newValue, userInputDisplay: newValue };
        case ACTIONS.ON_OPERATION:
            // TODO: add operation click logic here
            return state;
        case ACTIONS.ON_NEGATIVE:
            // TODO: add negative sign change here
            return { ...state, isNegative: !state.isNegative };
        case ACTIONS.ON_CLEAR_ELEMENT:
            // TODO: rewrite to clear active element (!)
            return initialState;
        case ACTIONS.ON_DOT:
            // TODO: Add logic to support float numbers
            return state;
        case ACTIONS.ON_PERCENT:
            // TODO: acc on percent click
            return state;
        case ACTIONS.ON_CLEAR_ALL:
            return initialState;
        default:
            return state;
    }
};

function BasicCalculatorPage() {
    // reducer
    const [calc, dispatch] = useReducer(basicCalculatorReducer, initialState);
    //
    const onDigitalKeyClick = (key) => {
        dispatch({ type: ACTIONS.ON_DIGITAL_BUTTON, payload: key });
    };
    const onOperationKeyClick = (key) => {
        dispatch({ type: ACTIONS.ON_OPERATION, payload: key });
    };
    const onNegativeKeyClick = () => {
        console.log('ON NEGATIVE');
        dispatch({ type: ACTIONS.ON_NEGATIVE });
    };

    const onEqualKeyClick = () => dispatch({ type: ACTIONS.ON_EQUAL });

    const onPercentKeyClick = () => dispatch({ type: ACTIONS.ON_PERCENT });

    const onGlobalClearKeyClick = () => dispatch({ type: ACTIONS.ON_CLEAR_ALL });

    const onClearKeyClick = () => dispatch({ type: ACTIONS.ON_CLEAR_ELEMENT });

    return (
        <>
            <DigitalDisplay
                displayLog={calc.secondaryNumber}
                displayUserInput={calc.userInputDisplay}
                displayResult={calc.primaryNumber}
            />
            <div className="buttons-group">
                <DigitalButton value={'C'} display={'C'} onClickCallback={onClearKeyClick}></DigitalButton>
                <DigitalButton value={'CE'} display={'CE'} onClickCallback={onGlobalClearKeyClick}></DigitalButton>
                <DigitalButton
                    value={OPERATORS.PERCENT}
                    display={'%'}
                    onClickCallback={onPercentKeyClick}
                ></DigitalButton>
                <DigitalButton
                    value={OPERATORS.DIVIDE}
                    display={'÷'}
                    onClickCallback={onOperationKeyClick}
                    backgroundColor={'orange'}
                ></DigitalButton>
                <DigitalButton value={'7'} display={'7'} onClickCallback={onDigitalKeyClick}></DigitalButton>
                <DigitalButton value={'8'} display={'8'} onClickCallback={onDigitalKeyClick}></DigitalButton>
                <DigitalButton value={'9'} display={'9'} onClickCallback={onDigitalKeyClick}></DigitalButton>
                <DigitalButton
                    value={OPERATORS.MULTIPLY}
                    display={'x'}
                    onClickCallback={onOperationKeyClick}
                    backgroundColor={'orange'}
                ></DigitalButton>
                <DigitalButton value={'4'} display={'4'} onClickCallback={onDigitalKeyClick}></DigitalButton>
                <DigitalButton value={'5'} display={'5'} onClickCallback={onDigitalKeyClick}></DigitalButton>
                <DigitalButton value={'6'} display={'6'} onClickCallback={onDigitalKeyClick}></DigitalButton>
                <DigitalButton
                    value={OPERATORS.SUBTRACT}
                    display={'-'}
                    onClickCallback={onOperationKeyClick}
                    backgroundColor="orange"
                ></DigitalButton>
                <DigitalButton value={'1'} display={'1'} onClickCallback={onDigitalKeyClick}></DigitalButton>
                <DigitalButton value={'2'} display={'2'} onClickCallback={onDigitalKeyClick}></DigitalButton>
                <DigitalButton value={'3'} display={'3'} onClickCallback={onDigitalKeyClick}></DigitalButton>
                <DigitalButton
                    value={OPERATORS.ADD}
                    display={'+'}
                    onClickCallback={onOperationKeyClick}
                    backgroundColor="orange"
                ></DigitalButton>
                <DigitalButton
                    value={OPERATORS.NEGATIVE}
                    display={'±'}
                    onClickCallback={onNegativeKeyClick}
                ></DigitalButton>
                <DigitalButton value={'0'} display={'0'} onClickCallback={onDigitalKeyClick}></DigitalButton>
                <DigitalButton
                    value={OPERATORS.PERIOD}
                    display={','}
                    onClickCallback={onDigitalKeyClick}
                ></DigitalButton>
                <DigitalButton
                    value={OPERATORS.EQUAL}
                    display={'='}
                    onClickCallback={onEqualKeyClick}
                    backgroundColor="#8A2BE2"
                ></DigitalButton>
            </div>

            <h5>primaryNumber: {calc.primaryNumber}</h5>
            <h5>SecondaryNumber: {calc.secondaryNumber}</h5>
            <h5>UserInput: {calc.userInput}</h5>
            <h5>LastOperation: {calc.lastOperation}</h5>
            <h5>isNegative: {calc.isNegative.toString()}</h5>
            <h5>userInputDisplay: {calc.userInputDisplay}</h5>
        </>
    );
}

export default BasicCalculatorPage;
