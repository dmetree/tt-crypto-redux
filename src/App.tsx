import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Payment } from './app/pages/payment/Payment';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Payment/>} />
    </Routes>
  );
}

export default App;
