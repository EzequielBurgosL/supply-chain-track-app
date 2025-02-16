import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SupplyChain } from './pages/EventsList';

export function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<SupplyChain />}/>
        </Routes>
      </BrowserRouter>
  );
}
