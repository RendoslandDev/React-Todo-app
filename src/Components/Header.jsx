import React from 'react'

export default function Header(props) {

    const {todos} = props

    const todoLength =todos.length

    const isTaskPlural = todos.length != 1

    const taskOrTasks = isTaskPlural ? 'tasks' : 'task'
  return (
    <header>
        <h1 className=''>You have {todoLength} open {taskOrTasks}</h1>
    </header>
  )
}
