import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [
            {
                id: '1',
                title: 'Learn JS',
                completed: false,
                image: "https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png"
            },
            {
                id: '2',
                title: 'Learn React',
                completed: false,
                image: "https://www.ahtapotyazilim.com/wp-content/uploads/2021/10/react-js.jpg"
            },
            {
                id: '3',
                title: 'Learn Python',
                completed: false,
                image: "https://i.pinimg.com/originals/aa/02/f9/aa02f97307df1a3b9ffead3353230222.jpg"
            }
        ],
        activeFilter: 'all'
    },
    reducers: {
        addNewTodo: (state, action) => {
            state.items.push(action.payload)
        },
        toggle: (state,action) => {
            const {id} = action.payload;
            const item = state.items.find(item => item.id === id);
            item.completed = !item.completed
        },
        del:(state,action)=>{
            const id = action.payload
            console.log("id",id)
            const filtered = state.items.filter(item=> item.id !== id)
            state.items = filtered
        },
        changeActiveFilter:(state,action) => {
            state.activeFilter = action.payload
        },
        clearCompleted: (state)=>{
            const filtered = state.items.filter(item=> !item.completed )
            state.items = filtered
        }
    }
})


export const {addNewTodo, toggle, del, changeActiveFilter,clearCompleted} = todoSlice.actions;
export default todoSlice.reducer;