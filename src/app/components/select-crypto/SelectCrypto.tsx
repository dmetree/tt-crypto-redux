import React, { useEffect } from 'react';
import s from './SelectCrypto.module.css';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setCoin, setCryptoPrice } from '../../redux/reducers/addressRequestSlice';
import { fetchCoins } from '../../redux/reducers/actioncreators';
import CryptoItem from './crypto-item/CryptoItem';
import { useNavigate } from 'react-router-dom';

const SelectCrypto = () => {
  const selected_crypto_name = useAppSelector((state) => state.order.orderInfo.selectedCoin.name)
  const selected_crypto_eur_price = useAppSelector((state) => state.order.orderInfo.selectedCoin.eur_rate)
  const eur_item_price = useAppSelector((state) => state.price.price_eur)

  const coins = useAppSelector(state => state.coin.coins);

  let crypto_price = 0;
  if  (eur_item_price){
    crypto_price = (eur_item_price / selected_crypto_eur_price)
  }


  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const goFoward = () => {
    dispatch(setCryptoPrice({
      crypto_price: crypto_price
    }))
    navigate(`/select-promo`)
  }

  
  useEffect(() => {
    dispatch(fetchCoins())
  }, [])
  
  
  return (
    <>
      <div className={s.wrapper}>
      <div className={s.select}>Select your crypto currency</div>
      <div>
        {
          coins.map(coin => (
          <CryptoItem
            key={coin.name}
            crypto={coin}
            onClick={() => dispatch(setCoin(
              {
                src: coin.src,
                name: coin.name,
                eur_rate: coin.eur_rate
              }
            ))}
            />
          ))
        }
      </div>

      <div>
        <div className={s.total}>Total</div>
        <div className={s.crypto_item}>
          <div>{selected_crypto_name}:</div>
          <div>{crypto_price}</div>
        </div>
      </div>

      <button onClick={() => goFoward()} className={[s.btn, "action-btn"].join(" ")}>NEXT</button>
    </div>

    </>
  )
}

export default SelectCrypto