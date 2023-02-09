import React, { useState } from "react";

import { addPost } from '../api/index.js'


export default function TodoForm(props) {
  const [input, setInput] = useState("");
 let count;
  // const post =[{
  //   title: input,
  //   body : "",
  //   userId : count+1 ,
  // }]
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(input)
    addPost(input);
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Add a todo"
      />
      <button type="submit" className="todo-button">Add Todo</button>
    </form>
  );
}
