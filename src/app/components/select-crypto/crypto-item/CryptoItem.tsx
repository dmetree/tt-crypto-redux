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
      <div>Checkbox</div>
      <div onClick={() => onClick(crypto)}>{crypto.name}</div>
    </div>
  )
}

export default CryptoItem