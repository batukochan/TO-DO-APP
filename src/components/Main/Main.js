import React from 'react'
import ToDoList from '../ToDoList/ToDoList'
import Form from '../Form/Form'

export default function Main() {
    return (
        <div className='main'>
            <Form></Form>
            <ToDoList></ToDoList>
        </div>
    )
}
