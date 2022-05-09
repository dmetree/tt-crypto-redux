import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import s from './Total.module.css';

const Total = () => {
  const selected_crypto_name = useAppSelector((state) => state.order.orderInfo.selectedCoin.name)
  const crypto_price = useAppSelector((state) => state.order.orderInfo.price.crypto_price)
  return (
    <div>
      <div className={s.total}>Total</div>
        <div className={s.crypto_item}>
        <div>{selected_crypto_name}:</div>
        <div>{crypto_price}</div>
        </div>
    </div>
  )
}

export default Total