import {configureStore} from '@reduxjs/toolkit';
import quoteIndexReducer from './quoteIndexSlice';

export const store = configureStore(
    {
        reducer: {
            quoteIndex: quoteIndexReducer,
        },
    }
);