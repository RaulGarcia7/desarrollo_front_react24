import { configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },// Aquí se almacena todo, en este caso el Slice de userSlice
});