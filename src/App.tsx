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
    <Payment/>
  );
}

export default App;
