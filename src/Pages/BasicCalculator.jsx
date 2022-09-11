import { useState } from 'react';
import DigitalButton from '../Components/DigitalButton';
import DigitalDisplay from '../Components/DigitalDisplay';

const OPERATORS = {
    ADD: '+',
    DIVIDE: '÷',
    MULTIPLY: 'x',
    SUBTRACT: '-',
    PERCENT: '%',
    NEGATIVE: 'negative',
    PERIOD: '.',
    EQUAL: '=',
};

function BasicCalculatorPage() {
    const primaryNumber = undefined;
    const secondaryNumber = undefined;

    const [userInput, setUserInput] = useState(undefined);
    const [isNegative, setNegative] = useState(false);

    const onDigitalKeyClick = (key) => {
        console.log(key);
        setUserInput((prev) => {
            return (!prev ? '' : prev) + key;
        });
    };
    const onOperationKeyClick = (key) => {
        console.log(key);
    };

    const onNegativeKeyClick = () => {
        console.log('ON NEGATIVE CLICK');
        setNegative((prev) => !prev);
    };

    const onEqualKeyClick = () => {
        console.log('ON EQUAL CLICK');
    };
    const onPercentKeyClick = () => {
        console.log('ON % CLICK!');
    };
    const onGlobalClearKeyClick = () => {
        console.log('GLOBAL CLEAR CLICK!');
        setUserInput(undefined);
    };
    const onClearKeyClick = () => {
        console.log('CLEAR CLICK!');
    };

    return (
        <>
            <DigitalDisplay userInputDisplay={userInput} />
            <div className="buttons-group">
                <DigitalButton
                    value={'C'}
                    display={'C'}
                    onClickCallback={onClearKeyClick}
                ></DigitalButton>
                <DigitalButton
                    value={'CE'}
                    display={'CE'}
                    onClickCallback={onGlobalClearKeyClick}
                ></DigitalButton>
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
                <DigitalButton
                    value={'7'}
                    display={'7'}
                    onClickCallback={onDigitalKeyClick}
                    backgroundColor={'#334244'}
                ></DigitalButton>
                <DigitalButton
                    value={'8'}
                    display={'8'}
                    onClickCallback={onDigitalKeyClick}
                    backgroundColor={'#334244'}
                ></DigitalButton>
                <DigitalButton
                    value={'9'}
                    display={'9'}
                    onClickCallback={onDigitalKeyClick}
                    backgroundColor={'#334244'}
                ></DigitalButton>
                <DigitalButton
                    value={OPERATORS.MULTIPLY}
                    display={'x'}
                    onClickCallback={onOperationKeyClick}
                    backgroundColor={'orange'}
                ></DigitalButton>
                <DigitalButton
                    value={'4'}
                    display={'4'}
                    onClickCallback={onDigitalKeyClick}
                    backgroundColor={'#334244'}
                ></DigitalButton>
                <DigitalButton
                    value={'5'}
                    display={'5'}
                    onClickCallback={onDigitalKeyClick}
                    backgroundColor={'#334244'}
                ></DigitalButton>
                <DigitalButton
                    value={'6'}
                    display={'6'}
                    onClickCallback={onDigitalKeyClick}
                    backgroundColor={'#334244'}
                ></DigitalButton>
                <DigitalButton
                    value={OPERATORS.SUBTRACT}
                    display={'-'}
                    onClickCallback={onOperationKeyClick}
                    backgroundColor={'orange'}
                ></DigitalButton>
                <DigitalButton
                    value={'1'}
                    display={'1'}
                    onClickCallback={onDigitalKeyClick}
                    backgroundColor={'#334244'}
                ></DigitalButton>
                <DigitalButton
                    value={'2'}
                    display={'2'}
                    onClickCallback={onDigitalKeyClick}
                    backgroundColor={'#334244'}
                ></DigitalButton>
                <DigitalButton
                    value={'3'}
                    display={'3'}
                    onClickCallback={onDigitalKeyClick}
                    backgroundColor={'#334244'}
                ></DigitalButton>
                <DigitalButton
                    value={OPERATORS.ADD}
                    display={'+'}
                    onClickCallback={onOperationKeyClick}
                    backgroundColor={'orange'}
                ></DigitalButton>
                <DigitalButton
                    value={OPERATORS.NEGATIVE}
                    display={'±'}
                    onClickCallback={onNegativeKeyClick}
                ></DigitalButton>
                <DigitalButton
                    value={'0'}
                    display={'0'}
                    onClickCallback={onDigitalKeyClick}
                    backgroundColor={'#334244'}
                ></DigitalButton>
                <DigitalButton
                    value={OPERATORS.PERIOD}
                    display={','}
                    onClickCallback={onDigitalKeyClick}
                ></DigitalButton>
                <DigitalButton
                    value={OPERATORS.EQUAL}
                    display={'='}
                    onClickCallback={onEqualKeyClick}
                    backgroundColor={'#8A2BE2'}
                ></DigitalButton>
            </div>
        </>
    );
}

export default BasicCalculatorPage;
