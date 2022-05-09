import React, {useEffect } from 'react';
import s from './SelectPromo.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchPromos } from '../../redux/reducers/actioncreators';
import { setPromo } from '../../redux/reducers/addressRequestSlice';
import PromoItem from './promo-item/PromoItem';
import Total from '../reusable/total/Total';
import SelecteCoin from '../reusable/selected/SelectedCoin';



const SelectPromo = () => {
  const dispatch = useAppDispatch();
  const selected_crypto_name = useAppSelector((state) => state.order.orderInfo.selectedCoin.name)
  const promos = useAppSelector((state) => state.promo.promos)
  
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

    
  useEffect(() => {
    dispatch(fetchPromos())
  }, [])


  return (
    <>

      <SelecteCoin/>
      <Total/>

      <div className={s.wrapper}>
        <div className={s.select}>SelectPromo</div>
        {
          promos.map(promo => (
          <PromoItem
            key={promo.name}
            promo={promo}
            onClick={() => dispatch(setPromo(
              {
                id: promo.id,
                name: promo.name
              }
            ))}
            />
          ))
        }

        <button onClick={() => goFoward()} className={[s.btn, "action-btn"].join(" ")}>NEXT</button>
      </div>
    </>
  )
}

export default SelectPromo