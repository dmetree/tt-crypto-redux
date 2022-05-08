import React, {FC} from 'react'
import { IPromo } from '../../../interfaces/IPromo';
import s from '../SelectPromo.module.css';

interface PromoItemProps {
  promo: IPromo;
  onClick: (promo: IPromo) => void;
}

const PromoItem: FC<PromoItemProps> = ({promo, onClick}) => {
  return (
    <div className={s.promo_item}>
      <div>Checkbox</div>
      <div onClick={() => onClick(promo)}>{promo.name}</div>
    </div>
  )
}

export default PromoItem