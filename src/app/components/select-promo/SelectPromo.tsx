import React from 'react';
import s from './SelectPromo.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

const SelectPromo = () => {

  const selected_crypto_name = useAppSelector((state) => state.coin.selectedCoin.name)
  
  const navigate = useNavigate();
  const goFoward = () => {
    navigate(`/select-address`)
  }

  const goBack = () => {
    navigate(`/select-promo`)
  }

  const change = () => {
    navigate(`/`)
  }

  return (
    <>
      <div className={s.payment_option}>
        <div className={s.crypto_title}>
          <img src="" alt="" />
          <div>{selected_crypto_name}</div>
        </div>
        <div onClick={() => change()}>Change</div>
      </div>

      <div className={s.wrapper}>
      <div className={s.select}>SelectPromo</div>
      <div className={s.promo_item}>
        <div>checkbox</div>
        <div>FREE SHIPPING</div>
      </div>
      <div className={s.promo_item}>
        <div>checkbox</div>
        <div>10% OFF NEXT ORDER</div>
      </div>
      
      <button onClick={() => goFoward()} className={[s.btn, "action-btn"].join(" ")}>NEXT</button>
    </div>

    </>

    
  )
}

export default SelectPromo