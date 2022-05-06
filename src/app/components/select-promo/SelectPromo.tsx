import React from 'react';
import s from './SelectPromo.module.css';
import { useNavigate } from 'react-router-dom';

const SelectPromo = () => {

  
  const navigate = useNavigate();
  const goFoward = () => {
    navigate(`/select-address`)
  }

  const goBack = () => {
    navigate(`/select-promo`)
  }

  return (
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
  )
}

export default SelectPromo