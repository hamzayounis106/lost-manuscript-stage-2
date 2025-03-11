import { createRoot } from 'react-dom/client';
import './app.css';

import { AppProvider } from './context/Context.jsx';
import FilterProvider from './context/FilterContext.jsx';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './routes.jsx';


const App = () => {
    const r = createBrowserRouter(routes);
    return <RouterProvider router={r} />;
};

createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </FilterProvider>
);
