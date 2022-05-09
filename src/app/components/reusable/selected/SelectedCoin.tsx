import React from 'react';
import s from './SelectedCoin.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';

const SelectedCoin = () => {
  
  const navigate = useNavigate();
  const selected_crypto_name = useAppSelector((state) => state.order.orderInfo.selectedCoin.name)

  const change = () => {
    navigate(`/`)
  }

  return (
    <div className={s.payment_option}>
      <div className={s.crypto_title}>
        <img src="" alt="" />
        <div>{selected_crypto_name}</div>
      </div>
      <div onClick={() => change()} className={s.change}>Change</div>
    </div>
  )
}

export default SelectedCoin


