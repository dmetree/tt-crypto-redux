import React from 'react';
import s from './SelectedMoney.module.css'

import BitcoinUrl from '../../../../assets/imgs/bitcoin.svg'

const SelectedMoney = () => {
  return (
    <div className={s.payment_option}>
    <div className={s.crypto_title}>
      <img src={BitcoinUrl} alt="Crypto" className={s.image}/>
      <div>Crypto currency</div>
    </div>
    <div className={s.change}>Change</div>
  </div>

  )
}

export default SelectedMoney