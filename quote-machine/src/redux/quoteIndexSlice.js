import { createSlice } from '@reduxjs/toolkit';
export const quoteIndexSlice = createSlice(
    {
        name: 'quoteIndex',
        initialState: {
            value: 0,
            color: 'orangered'
        },
        reducers: {
            discolour: (state, action)=>{
                state.color = action.payload;
            },
            // slice 自动定义一个 actionCreator 方法，名为 retrieval
            retrieval: (state, action)=>{
                state.value = action.payload;
            },
        }
    }
);

export default quoteIndexSlice.reducer;
export const {retrieval, discolour} = quoteIndexSlice.actions;