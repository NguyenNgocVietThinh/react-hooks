import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import './HomePage.scss';
import ColorBox from './components/ColorBox';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PostFiltersForm from './components/PostFilterForm';
import Clock from './components/Clock';
import MagicBox from './components/MagicBox';


function HomePage() {

//   const [todoList, setTodoList] = useState([
//     {id:1, title: 'I love you'},
//     {id:2, title: 'We love you'},
//     {id:3, title: 'They love you'}
//   ])

//  function removeTodo(todo) {  
//    const index = todoList.findIndex(x => x.id === todo.id)
//    if(index < 0) return
//    const fakeTodoList = [...todoList]
//    fakeTodoList.splice(index,1)
//    setTodoList(fakeTodoList)
//  }

//  function handleTodoFormSubmit(formValues) {
//    // add new todo to current todo list
//   const newTodo = {
//     id: todoList.length + 1,
//     ...formValues,
//   }

//   const fakeTodoList = [...todoList]
//   fakeTodoList.push(newTodo)
//   setTodoList(fakeTodoList)

//  }

//  const [postList, setPostList] = useState([])
//  const [pagination, setPagination] = useState({})

//  const [filter,setFilter] = useState({
//    _limit: 10,
//    _page: 1,
//  })

//  useEffect(()=> {
//    async function fetchPostList() {
//     try {
//       const paramsString = queryString.stringify(filter)
//       const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`
//       const response = await fetch(requestURL)
//       const responseJSON = await response.json();
//       console.log(responseJSON)
//       const {data, pagination} = responseJSON
//       console.log(data)
//       setPostList(data)
//       setPagination(pagination)
//      }
//      catch (error) {
//       console.log('Failed fetching post list', error.message)
//     }
//   }
//     fetchPostList() 
//  }, [filter])

//  function handlePageChange(newPage) {
//    console.log('New page:', newPage)
//    setFilter({
//      ...filter,
//      _page: newPage
//    })
//  }

  const [postList, setPostList] = useState([])
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  })
  const [pagination, setPagination] = useState({})

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filter)
        const requestURL=`http://js-post-api.herokuapp.com/api/posts?${paramsString}`
        const response = await fetch(requestURL)
        const responseJSON = await response.json()
        console.log(responseJSON)
        const {data, pagination} = responseJSON
        setPagination(pagination)
        setPostList(data)
      } catch (error) {
        console.log('Fetching failed', error.message)
      }
    }
    fetchPostList()
  },[filter])

  function handlePageChange(newPage) {
    setFilter({
      ...filter,
      _page: newPage
    })
  }

  function handleFiltersChange(newFilter) {
    console.log('new filter', newFilter)
    // cho page bang 1 vi neu ket qua du so luong het trang 1 ma minh o trnag 2 => ko tim co de hien thi
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.searchTerm,
    })
  }

  const[showClock,setShowClock] = useState(true)

  return (
    <div className="app"> 
    <h1>React hooks</h1>
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} handleClick={removeTodo}/> */}
      {/* <PostFiltersForm onSubmit={handleFiltersChange}/>
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
      {/* {showClock && <Clock />}
      <button onClick= {() =>setShowClock(false)}> Hide</button> */}
      <MagicBox />
    </div>
  );
}

export default HomePage;
