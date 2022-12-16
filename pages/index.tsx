import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const Index = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const todoObject:{id:string,todo:string} = {
      id: uuid(),
      todo: todo,
    };
    console.log(todoObject);
    const newTodoList:any = [...todoList, todoObject];
    setTodoList(newTodoList);
    localStorage.setItem("todo", JSON.stringify(newTodoList));
    setTodo("");
  };

  return (
    <>
      <div className="text-6xl flex justify-center mt-10">
        TODOアプリ
      </div>
      <div className="relative w-4/12 mx-auto mt-10">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-700 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="todo"
            required
          />
          <button
            type="submit"
            onClick={addTodo}
            className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            送信
          </button>
        </div>

        <div className="overflow-x-auto relative mt-10 flex justify-center">
          <table className="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-1 bg-black text-white flex justify-center"
                >
                  番号
                </th>
                <th scope="col" className="py-3 px-6">
                  Title
                </th>
                <th scope="col" className="py-3 px-6">
                  編集
                </th>
                <th scope="col" className="py-3 px-6">
                  削除
                </th>
              </tr>
            </thead>
            <tbody>
            {todoList.map((onetodo:{id:string,todo:string}, index:number) => {
              return(
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="py-4 px-4 flex justify-center bg-black font-medium text-white dark:text-black"
                    >
                      {index}
                    </td>
                    <td className="py-2 px-4">{onetodo.todo}</td>
                    <td className="py-2 px-4">
                      aa
                    </td>
                    <td className="py-2 px-4">
                      aa
                    </td>
                  </tr>
              );})}
            </tbody>
          </table>
        </div>
    </>
  )
};

export default Index;
