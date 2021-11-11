import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../../redux/_reducers/slices/todoSlice'
import { nanoid } from '@reduxjs/toolkit'
// import Box from '@mui/material/Box';
import './form.css'

export default function Form() {

    const [title, SetTitle] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo({ id: nanoid(), title, completed: false }))
        SetTitle('')
    }

    return (
        <form className="form-area" onSubmit={handleSubmit}>
            <input className='addNewTodo' placeholder='To Do !' autoFocus value={title} onChange={(e) => SetTitle(e.target.value)} />
        </form>
    )
}
