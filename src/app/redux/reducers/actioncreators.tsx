import { AppDispatch } from "../store";
import axios from "axios";
import { ICrypto } from "../../interfaces/ICrypto";
import { coinSlice } from "./coinSlice";
import { IUser } from '../../interfaces/IUser';
import { userSlice } from "./userSlice";


export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    } catch (e) {
        dispatch(userSlice.actions.usersFetchingError("Can't fetch users :("))
    }
}

export const fetchCoins = () => async (dispatch: AppDispatch) => {
    console.log('action creators COINS')
    try {
        dispatch(coinSlice.actions.coinFetching())
        const response = await axios.get<ICrypto[]>('https://raw.githubusercontent.com/dmetree/tt-crypto-redux/main/src/coin_list.json')
        dispatch(coinSlice.actions.coinFetchingSuccess(response.data))
    } catch (e) {
        dispatch(coinSlice.actions.coinFetchingError("Can't fetch coins :("))
    }
}
