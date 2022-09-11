import { Routes, Route } from 'react-router-dom';

import BasicCalculatorReducer from './Pages/BasicCalculatorReducer';
import AdvancedCalculatorPage from './Pages/AdvancedCalculator';

function AppRouter() {
    return (
        <Routes>
            <Route index element={<BasicCalculatorReducer />} />
            <Route path="ad" element={<AdvancedCalculatorPage />} />
            <Route path="*" element={<div>404 NOT FOUND</div>} />
        </Routes>
    );
}

export default AppRouter;

// <Route path="temp" element={<TemplateFormulaPage />} />
// <Route path="home" element={<HomePage />} />
// <Route path="add" element={<AddUpPage />} />
