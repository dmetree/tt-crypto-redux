import React from 'react';
import s from './EnterAddress.module.css';
import { useNavigate } from 'react-router-dom';

const EnterAddress = () => {

  const navigate = useNavigate();
  const goFoward = () => {
    navigate(`/transaction-pending`)
  }

  const goBack = () => {
    navigate(`/select-promo`)
  }


  return (
    <div className={s.wrapper}>
      <div className={s.select}>Send your payment to</div>
			<div className={s.wallet_input}>
				<input className={s.input}>
				</input>
				<button className={s.btn_copy}>COPY</button>
			</div>
      <button onClick={() => goFoward()} className={[s.btn, "action-btn"].join(" ")}>NEXT</button>
    </div>
  )
}

export default EnterAddress