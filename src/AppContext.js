// global application state
// variable are available across the entire application(!)

import { createContext } from 'react';

const AppContext = createContext(null);

export default AppContext;