import React from 'react';
import s from './EnterAddress.module.css';

const EnterAddress = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.select}>Send your payment to</div>
			<div className={s.wallet_input}>
				<input className={s.input}>
				</input>
				<button className={s.btn_copy}>COPY</button>
			</div>
      <button className={[s.btn, "action-btn"].join(" ")}>NEXT</button>
    </div>
  )
}

export default EnterAddress