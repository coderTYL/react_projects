import { configureStore } from "@reduxjs/toolkit";
import dimensionItemsReducer from './dimensionOperatorSlice';

export default configureStore({
    reducer: {
        dimensionItems: dimensionItemsReducer,
    },
});