import { Link as RouterLink } from 'react-router-dom';

function BasicCalculatorPage() {
    return (
        <div>
            advanced calculator
            <RouterLink to={'/'}>Basic Calculator</RouterLink>
        </div>
    );
}

export default BasicCalculatorPage;
