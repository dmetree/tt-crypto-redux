import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Counter } from './features/counter/Counter';
import { Payment } from './app/pages/payment/Payment';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="/payment" element={<Payment/>} />
      </Routes>
  );
}

export default App;
