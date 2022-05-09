import React, {FC} from 'react'
import s from '../SelectCrypto.module.css';
import { ICrypto } from '../../../interfaces/ICrypto'

interface CryptoItemProps {
  crypto: ICrypto;
  onClick: (crypto: ICrypto) => void;
}

const CryptoItem: FC<CryptoItemProps> = ({crypto, onClick}) => {
  return (

    <div className={s.crypto_item}>
      <label onClick={() => onClick(crypto)} className={s.form_control}>
        <input type="radio" name="radio" id={crypto.name}/>
        {crypto.name}
      </label>
    </div>
  )
}

export default CryptoItem