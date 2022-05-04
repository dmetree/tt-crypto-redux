import React from 'react';
import s from './TransactionPending.module.css';

const TransactionPending = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.pending_info}>
        <img src="" alt="Refresh" />
        <h2>Transaction pending</h2>
        <h5>Transaction ID</h5>
        <p>321423543543h543j5h4jhko23jo423j4o32dd</p>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</h6>
      </div>
      <button className='action-btn'>REFRESH</button>
    </div>
  )
}

export default TransactionPending