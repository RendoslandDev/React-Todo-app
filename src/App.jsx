import { React ,useState , useEffect } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


function App() {


  // const todos = [
  //   {input:"Get the motowaypack", complete:true},
  //   {input:"let get this merchandize", complete:false},
  //   {input:"Get the motowaypack", complete:false},
  //   {input:"i love coding right", complete:true},
  // ]

  const [todos , setTodos] = useState([
    {input:"Get the motowaypack", complete:true},
  ])

  const [selectedTab , setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo){
    const  newTodoList =[...todos, {input:newTodo, complete:false}]
    setTodos(newTodoList)
    handleSavedata(newTodoList)
  }
  function handleCompleteTodo(index){

    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] =completedTodo
    setTodos(newTodoList) 
    handleSavedata(newTodoList)


  }
  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSavedata(newTodoList)
  }

   function handleSavedata(currTodos){
    localStorage.setItem('todo-app', JSON.stringify({ todos : currTodos }))
   }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {
      return
    }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])





  return (
    <>
    <Header todos = {todos}/>
    <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
    <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} todos = {todos} selectedTab={selectedTab}/>
    <TodoInput handleAddTodo={handleAddTodo}/>
      
    </>
  )
}

export default App
