import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Button from "../components/button";
import Loading from "../components/loading";
import Link from "next/link";
import BaseLayout from "../components/baselayout";

const Index = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const existingTodoList = JSON.parse(localStorage.getItem("todo"));
    if (existingTodoList) {
      setTodoList(existingTodoList);
    }
  }, []);

  const addTodo = () => {
    const todoObject:{id:string,todo:string} = {
      id: uuid(),
      todo: todo,
    };
    const newTodoList:any = [...todoList, todoObject];
    setTodoList(newTodoList);
    localStorage.setItem("todo", JSON.stringify(newTodoList));
    setTodo("");
  };

  const delate = (todoID:string) => {
    setLoading(true);
    const newTodoList = todoList.filter((todoItem) => {
      return todoItem.id !== todoID;
    });
    setTodoList(newTodoList);
    localStorage.setItem("todo", JSON.stringify(newTodoList));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const check=()=>{
    console.log(todoList)
  }

  if (!loading) {
  return (
    <>
      <BaseLayout>
      <div className="text-6xl flex justify-center mt-10">
        TODOアプリ
      </div>
      <div className="relative w-4/12 mx-auto mt-10">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
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
                      <Link href={onetodo.id}>
                        <Button
                          title="編集"
                          style="bg-black px-4 p-2 text-white rounded-lg"                 
                        />
                      </Link>
                    </td>
                    <td className="py-2 px-4">
                      <Button
                        func={() => {
                          delate(onetodo.id);
                        }}
                        title="削除"
                        style="bg-black px-4 py-2 text-white rounded-lg"
                      />
                    </td>
                  </tr>
              );})}
            </tbody>
          </table>
        </div>
        <button onClick={check}>check</button>
        </BaseLayout>
    </>
  )
}else {
  return <Loading />;
}
};

export default Index;
