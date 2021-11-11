import React from 'react'
import './Footer.css'
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { changeActiveFilter, clearCompleted } from '../../redux/_reducers/slices/todoSlice';


export default function Footer() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.todo.items)
    const activeFilter = useSelector(state => state.todo.activeFilter)
    const itemsLeft = items.filter(item => !item.completed).length
    return (
        <div className="footer">
            <div className="filter">
                <Stack direction="row" spacing={2}>
                    <Button >{itemsLeft > 1 ? itemsLeft + ' Items' : itemsLeft === 1 ? itemsLeft + " Item" : 'Missions Completed'} </Button>
                    <Button variant={activeFilter === 'all' ? "contained" : ""} onClick={() => dispatch(changeActiveFilter('all'))}>all</Button>
                    <Button variant={activeFilter === 'active' ? "contained" : ""} onClick={() => dispatch(changeActiveFilter('active'))}>Active</Button>
                    <Button variant={activeFilter === 'completed' ? "contained" : ""} onClick={() => dispatch(changeActiveFilter('completed'))}>completed</Button>
                    <Button onClick={()=> dispatch(clearCompleted())}>Clear completed</Button>
                </Stack>

            </div>
            <div className="footer-text">
                Created by Batu Koçhan
            </div>
        </div>
    )
}
