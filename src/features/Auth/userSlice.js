
import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import StorageKeys from '../../constants/storage-keys';

const { createSlice } = require('@reduxjs/toolkit');

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        //payload là data truyền vào
        //call API to register
        const data = await userApi.register(payload);

        //save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));


        //return user data
        return data.user;
    }
)

export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
        //payload là data truyền vào
        //call API to register
        const data = await userApi.login(payload);

        //save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));


        //return user data
        return data.user;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        setting: {},
    },
    reducers: {
        logout(state) {
            // clear local storage
            localStorage.removeItem(StorageKeys.TOKEN);
            localStorage.removeItem(StorageKeys.USER);

            // set current state to empty
            state.current = {};
        }
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },

        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
    }
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
