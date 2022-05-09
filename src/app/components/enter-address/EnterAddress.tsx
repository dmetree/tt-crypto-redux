import React, { useEffect, useState } from 'react';
import s from './EnterAddress.module.css';
import { useNavigate } from 'react-router-dom';
import Total from '../reusable/total/Total';
import SelecteCoin from '../reusable/selected/SelectedCoin';
import SelectedPromo from '../reusable/selected/SelectedPromo';
import SelectedMoney from '../reusable/selected/SelectedMoney';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchAddress } from '../../redux/reducers/actioncreators';
import copy from "copy-to-clipboard";  

const EnterAddress = () => {
  const dispatch = useAppDispatch();
  const payment_address = useAppSelector((state) => state.address.address.addr);
  const navigate = useNavigate();

  const goFoward = () => {
    navigate(`/transaction-pending`)
  }


  const copyToClipboard = () => {
    copy(payment_address);
    alert(`You have copied "${payment_address}"`);
 }

  useEffect(() => {
    dispatch(fetchAddress())
  }, [])


  return (
    <>
      <SelectedMoney/>
      <SelecteCoin/>
      <SelectedPromo/>
      <Total/>
      <div className={s.wrapper}>
      <div className={s.select}>Send your payment to</div>
			<div className={s.wallet_input}>
				
        <input 
          className={s.input} 
          id="input_field"
          value={payment_address}
          />
				
				<button className={s.btn_copy} onClick={() => copyToClipboard()}>COPY</button>
			</div>
      <button onClick={() => goFoward()} className={[s.btn, "action-btn"].join(" ")}>NEXT</button>
    </div>
    </>
    
  )
}

export default EnterAddress