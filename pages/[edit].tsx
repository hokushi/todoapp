import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Edit = () => {

    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState("");
    const tododata = useRouter();
    const todoid = tododata.query.edit;

    useEffect(() => {
        // 文字列化したJSオブジェクトを復元
        setTodoList(JSON.parse(localStorage.getItem("todo")));
      }, []);

    const check=()=>{
        console.log(tododata)
    }

    const editTodo = () => {
        const newTodoList =
         todoList.map((todoItem) => {
          if (todoItem.id === todoid) {
            todoItem.todo = todo;
          }
          return todoItem;
        });
        setTodoList(newTodoList);
        console.log(newTodoList);
        localStorage.setItem("todo", JSON.stringify(newTodoList));
    };

    return (
        <>
          <div className="relative w-4/12 mx-auto mt-10">
            <input
              type="search"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-700 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="edittodo"
              required
            />
            <Link href="/">
              <button
                type="submit"
                onClick={editTodo}
                className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                送信
              </button>
            </Link>
          </div>
          <button onClick={check}>check</button>
        </>
      );
    };
    
    export default Edit;
    