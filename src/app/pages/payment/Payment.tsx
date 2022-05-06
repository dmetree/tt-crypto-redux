import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import BitpayInfo from '../../components/bitpay-info/BitpayInfo';
import EnterAddress from '../../components/enter-address/EnterAddress';
import SelectCrypto from '../../components/select-crypto/SelectCrypto';
import SelectPromo from '../../components/select-promo/SelectPromo';
import TransactionPending from '../../components/transaction-pending/TransactionPending';
import TransactionStatus from '../../components/transaction-status/TransactionStatus';
import s from './Payment.module.css';


export const Payment = () => {

  return (
    <div className={s.wrapper}>
      <div className={s.payment}>
        <h2>Pay with Crypto</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <div className={s.payment_option}>
          <div className={s.crypto_title}>
            <img src="" alt="BTC" />
            <div>Crypto currency</div>
          </div>
          <div>Change</div>
        </div>

        <Routes>
          <Route path="/" element={<SelectCrypto/>} />
          <Route path="/select-promo" element={<SelectPromo/>} />
          <Route path="/select-address" element={<EnterAddress/>} />
          <Route path="/transaction-pending" element={<TransactionPending/>} />
          <Route path="/transaction-status" element={<TransactionStatus/>} />
        </Routes>
        
      </div>
      <BitpayInfo/>
    </div>
  )
}
