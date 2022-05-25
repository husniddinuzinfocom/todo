import React, { useId, useState } from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import Lists from "../../components/Lists/Lists";

export default function Layout() {
  const [todoList, setTodoList] = useState([
    {
      id: useId(),
      title: "lorem hello",
      isCompleted: true
    },
    {
      id:useId(),
      title: "lorem hello",
      isCompleted: false
    },
    {
      id:useId(),
      title: "lorem hello",
      isCompleted: false
    },
    {
      id:useId(),
      title: "lorem hello",
      isCompleted: false
    },
    {
      id:useId(),
      title: "lorem hello",
      isCompleted: false
    },
  ]);
  return (
    <>
        <TodoForm setTodoList={setTodoList}/>
        <Lists todoList={todoList} />
    </>
  )
}
