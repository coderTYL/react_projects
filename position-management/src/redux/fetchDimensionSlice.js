import { createSlice } from "@reduxjs/toolkit";

export const addDimensionSlice = createSlice({
    name: 'addDimension',
    initialState: { dimensionItems: [] },
    reducers: {
       
        add: (state, action) => {
            state.dimensionItems = [...state.dimensionItems, action.payload];
        }
    }
    
});
export const {add} = addDimensionSlice.actions;
export default addDimensionSlice.reducer;