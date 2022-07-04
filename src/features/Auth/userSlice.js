
import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

const { createSlice } = require('@reduxjs/toolkit');

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        //payload là data truyền vào
        //call API to register
        const data = await userApi.register(payload);

        //save data to local storage
        localStorage.setItem('access_token', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user));


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
        localStorage.setItem('access_token', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user));


        //return user data
        return data.user;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        setting: {},
    },
    reducers: {

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

const { reducer } = userSlice;
export default reducer;
