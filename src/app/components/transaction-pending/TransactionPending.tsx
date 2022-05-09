import React, { useEffect } from 'react';
import s from './TransactionPending.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import refreshUrl from './../../../assets/imgs/refresh.svg'
import { fetchTransaction } from '../../redux/reducers/actioncreators';

const TransactionPending = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const transaction_id = useAppSelector((state) => state.transaction.transaction.transaction)

  useEffect(() => {
    dispatch(fetchTransaction())
    // setTimeout(() => {
    //   navigate(`/transaction-status`)
    // }, 3000);
  }, [])
  
  

  return (
    <div className={s.wrapper}>
      <div className={s.pending_info}>
        <img src={refreshUrl} alt="Refresh" />
        <h2 className={s.status}>Transaction pending</h2>
        <div className={s.text_id}>Transaction ID</div>
        <div className={s.hash}>{transaction_id}:::321423543543h543j5h4jhko23jo423j4o32dd</div>
        <p className={s.text}>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod...</p>
      </div>
      <button className='action-btn'>REFRESH</button>
    </div>
  )
}

export default TransactionPending