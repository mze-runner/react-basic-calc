import { Routes, Route } from 'react-router-dom';

import BasicCalculatorPage from './Pages/BasicCalculator';
import AdvancedCalculatorPage from './Pages/AdvancedCalculator';

function AppRouter() {
    return (
        <Routes>
            <Route index element={<BasicCalculatorPage />} />
            <Route path="ad" element={<AdvancedCalculatorPage />} />
            <Route path="*" element={<div>404 NOT FOUND</div>} />
        </Routes>
    );
}

export default AppRouter;

// <Route path="temp" element={<TemplateFormulaPage />} />
// <Route path="home" element={<HomePage />} />
// <Route path="add" element={<AddUpPage />} />
