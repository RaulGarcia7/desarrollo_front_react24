import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: null,
    username: null,
    email: null,
} //Estado inicial de nuestra aplicacion

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => { //funcion que cambia el estado del usuario que se añade
            const user = action.payload;
            state.name = user.name;
            state.username = user.username;
            state.email = user.email;
        },
        changeEmail: (state, action) => { //funcion que cambia el email
            state.email = action.payload;
        },
    },
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;