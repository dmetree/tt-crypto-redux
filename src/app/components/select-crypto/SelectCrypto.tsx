import React from 'react';
import s from './SelectCrypto.module.css';

const SelectCrypto = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.select}>Select your crypto currency</div>
      <div>
        <div className={s.crypto_item}>
          <div>Checkbox</div>
          <div>ETH</div>
        </div>
        <div className={s.crypto_item}>
          <div>Checkbox</div>
          <div>BTC</div>
        </div>
      </div>

      <div>
        <div className={s.total}>Total</div>
        <div className={s.crypto_item}>
          <div>BTC</div>
          <div>0.00241</div>
        </div>
      </div>

      <button className={[s.btn, "action-btn"].join(" ")}>NEXT</button>
    </div>
  )
}

export default SelectCrypto