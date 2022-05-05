import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios from "axios";
import { ICrypto } from "../../interfaces/ICrypto";
import coinSlice from "./coinSlice";
import { IUser } from '../../interfaces/IUser';
import { userSlice } from "./userSlice";


export const fetchUsers = () => async (dispatch: AppDispatch) => {
    console.log('Dispatching in action creators')
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    } catch (e) {
        dispatch(userSlice.actions.usersFetchingError("Can't fetch users :("))
    }
}
