


import {React,useState} from 'react'

const TodoInput = (props) => {
  const {handleAddTodo} = props

  const [inputValue , setInputValue] =  useState('')
  return (
    <div className='imput-container'>
      <input type="text" placeholder='AddTask' value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
      <button onClick={()=>{
        if (!inputValue){return}
        handleAddTodo(inputValue)
        setInputValue('')
      }}>
        <i className='fa-solid fa-plus'></i>
      </button>
    </div>
  )
}

export default TodoInput