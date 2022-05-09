
import { ISelectedCoin } from './ISelectedCoin';
import { ISelectedPromo } from './ISelectedPromo';
import { ICryptoPrice } from './ICryptoPrice';

export interface IOrderInfo {
    price: ICryptoPrice,
    selectedCoin: ISelectedCoin,
    selectedPromo: ISelectedPromo,
}