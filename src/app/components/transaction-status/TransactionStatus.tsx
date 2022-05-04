import React from 'react';
import s from './TransactionStatus.module.css';

const TransactionStatus = () => {
  return (
    <div className={s.wrapper}>
      <img src="" alt="status-icon" />
      <h2>Payment successful</h2>
      <p>Nullam placerat erat volutpat mollis congue. Nunc felis libero, interdum eu purus eget, posuere porttitor nisi. Suspendisse potenti. Etiam ut lectus augue. </p>
      <button className='action-btn'>HOME</button>
    </div>
  )
}

export default TransactionStatus