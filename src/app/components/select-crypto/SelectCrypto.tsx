import React, { useEffect } from 'react';
import s from './SelectCrypto.module.css';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setCrypto } from '../../redux/reducers/coinSlice';
import { fetchUsers } from '../../redux/reducers/actioncreators';

const SelectCrypto = () => {
  const dispatch = useAppDispatch();
  
  const selected_crypto_title = useAppSelector((state) => state.coin.selectedCoin.title)
  const selected_crypto_eur_price = useAppSelector((state) => state.coin.selectedCoin.eur_rate)
  const eur_item_price = useAppSelector((state) => state.price.price_EUR)

  const users = useAppSelector(state => state.users.users)

  let crypto_price
  if  (eur_item_price){
    crypto_price = eur_item_price / selected_crypto_eur_price
  }
  
  useEffect(() => {
    dispatch(fetchUsers())
    console.log("Dispatched - FetchCoins")
  }, [])
  
  

  return (
    <div className={s.wrapper}>
      {JSON.stringify(users, null, 2)}
      <div className={s.select}>Select your crypto currency</div>
      <div>
        <div className={s.crypto_item}>
          <div>Checkbox</div>
          <div onClick={() => dispatch(setCrypto({title: 'ETH', eur_rate: 3000}))}>ETH</div>
          {/* <div>ETH</div> */}
          
        </div>
        <div className={s.crypto_item}>
          <div>Checkbox</div>
          <div onClick={() => dispatch(setCrypto({title: 'BTC', eur_rate: 40000}))}>BTC</div>
          {/* <div>BTC</div> */}
        </div>
        <div className={s.crypto_item}>
          <div>Checkbox</div>
          <div onClick={() => dispatch(setCrypto({title: 'ADA', eur_rate: 12}))}>ADA</div>
          {/* <div>BTC</div> */}
        </div>
      </div>

      <div>
        <div className={s.total}>Total</div>
        <div className={s.crypto_item}>
          <div>{selected_crypto_title}:</div>
          <div>{crypto_price}</div>
        </div>
      </div>

      <button className={[s.btn, "action-btn"].join(" ")}>NEXT</button>
    </div>
  )
}

export default SelectCrypto