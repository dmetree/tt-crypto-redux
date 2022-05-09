import React from 'react';
import s from './SelectedCoin.module.css';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { useNavigate } from 'react-router-dom';

const SelectedPromo = () => {

    const navigate = useNavigate();
    const selected_promo_name = useAppSelector((state) => state.order.orderInfo.selectedPromo.name)
  
    const change = () => {
      navigate(`/select-promo`)
    }

  return (
    <div className={s.payment_option}>
        <div className={s.crypto_title}>
            <div>{selected_promo_name}</div>
            </div>
        <div onClick={() => change()} className={s.change}>Change</div>
    </div>
  )
}

export default SelectedPromo