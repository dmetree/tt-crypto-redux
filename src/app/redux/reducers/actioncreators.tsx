import { AppDispatch } from "../store";
import axios from "axios";
import { ICrypto } from "../../interfaces/ICrypto"
import { IPromo } from "../../interfaces/IPromo";
import { IAddress } from "../../interfaces/IAddress";
import { ITransaction } from "../../interfaces/ITransaction";
import { coinSlice } from "./coinSlice";
import { promoSlice } from "./promoSlice";
import { addressSlice } from "./addressSlice";
import { transactionSlice } from "./transactionSlice";



export const fetchCoins = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(coinSlice.actions.coinFetching())
        const response = await axios.get<ICrypto[]>('https://raw.githubusercontent.com/dmetree/tt-crypto-redux/main/src/coin_list.json')
        dispatch(coinSlice.actions.coinFetchingSuccess(response.data))
    } catch (e) {
        dispatch(coinSlice.actions.coinFetchingError("Can't fetch coins :("))
    }
}

export const fetchPromos = () => async ( dispatch: AppDispatch) => {
    try {
        dispatch(promoSlice.actions.promoFetching())
        const response = await axios.get<IPromo[]>('https://raw.githubusercontent.com/dmetree/tt-crypto-redux/main/src/promo_list.json')
        dispatch(promoSlice.actions.promoFetchingSuccess(response.data))
    } catch (e) {
        dispatch(promoSlice.actions.promoFetchingError("Can't fetch promos :("))
    }
}


export const paymentRequest = () => async ( dispatch: AppDispatch) => {
    try {
        
    } catch (e) {
        
    }
}



export const fetchAddress = () => async ( dispatch: AppDispatch) => {
    try {
        dispatch(addressSlice.actions.addressFetching())
        const response = await axios.get<IAddress>('https://raw.githubusercontent.com/dmetree/tt-crypto-redux/main/src/send-to-address.json')
        dispatch(addressSlice.actions.addressFetchingSuccess(response.data))
    } catch (e) {
        dispatch(addressSlice.actions.addressFetchingError("Can't fetch address :("))
    }
}



export const fetchTransaction = () => async ( dispatch: AppDispatch) => {
    try {
        dispatch(transactionSlice.actions.transactionFetching())
        const response = await axios.get<ITransaction>('https://raw.githubusercontent.com/dmetree/tt-crypto-redux/main/src/transaction.json')
        dispatch(transactionSlice.actions.transactionFetchingSuccess(response.data))
    } catch (e) {
        dispatch(transactionSlice.actions.transactionFetchingError("Can't fetch transaction :("))
    }
}
