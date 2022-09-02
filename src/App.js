import AppContext from './AppContext';
import { BrowserRouter } from "react-router-dom";
// import AppRouter from './AppRouter';
import Layout from './Layout';

function App() {
  return (
    <AppContext.Provider value={{
      username: 'idk'
    }}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AppContext.Provider >
  );
}

export default App;
