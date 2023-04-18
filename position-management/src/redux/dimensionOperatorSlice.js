import { createSlice } from "@reduxjs/toolkit";

export const dimensionOperatorSlice = createSlice({
    name: 'dimensionOperator',
    initialState: { dimensionItems: [] },
    reducers: {
       
        add: (state, action) => {
            state.dimensionItems = [...state.dimensionItems, action.payload];
        }
    }
    
});
export const {add} = dimensionOperatorSlice.actions;
export default dimensionOperatorSlice.reducer;