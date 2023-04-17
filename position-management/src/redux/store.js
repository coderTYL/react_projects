import { configureStore } from "@reduxjs/toolkit";
import addReducer from './fetchDimensionSlice';

export default configureStore({
    reducer: {
        dimensionItems: addReducer,
    },
});