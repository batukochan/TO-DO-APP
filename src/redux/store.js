import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './_reducers/slices/todoSlice'

export const store = configureStore({
    reducer: {
        todo: todoSlice,
    },
})