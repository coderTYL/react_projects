import { createSlice } from '@reduxjs/toolkit';
export const quoteIndexSlice = createSlice(
    {
        name: 'quoteIndex',
        initialState: {
            value: 0,
        },
        reducers: {

            // slice 自动定义一个 actionCreator 方法，名为 retrieval
            retrieval: (state)=>{
                return ++state.value;
            },
        }
    }
);

export default quoteIndexSlice.reducer;
export const {retrieval} = quoteIndexSlice.actions;