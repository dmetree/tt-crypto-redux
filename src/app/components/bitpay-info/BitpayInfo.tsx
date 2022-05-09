import React from 'react'
import s from './BitpayInfo.module.css'
import LogoUrl from './../../../assets/imgs/logo.svg'

const BitpayInfo = () => {
  return (
    <div className={s.wrapper}>
      <div>Easy, fast and secure payments</div>
      <p className={s.text_long}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <p className={s.text}>Powered by</p>
      <img src={LogoUrl} alt="Logo" className={s.image} />
    </div>
  )
}

export default BitpayInfo;

