import React, {FC} from 'react'
import { IPromo } from '../../../interfaces/IPromo';
import s from '../SelectPromo.module.css';

interface PromoItemProps {
  promo: IPromo;
  onClick: (promo: IPromo) => void;
}

const PromoItem: FC<PromoItemProps> = ({promo, onClick}) => {
  return (
    <label onClick={() => onClick(promo)} className={s.form_control}>
      <input type="radio" name="radio" id={promo.name}/>
      {promo.name}
    </label>
  )
}

export default PromoItem