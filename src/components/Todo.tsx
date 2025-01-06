import { useState } from "react";

function Todo() {
  //inputに入力された値を保持するためのstate
  const [todo, setTodo] = useState<string>("");

  //todoリストを保持するためのstate
  const [todoText, setTodoText] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo(event.target.value);
  }

  //todoリストにタスクを追加する関数
  const addTask = () => {
    if (todo === "") {
      return;
    } else {
      setTodoText([...todoText, todo]);
      setTodo("");
    }
  };

  //todoリストからタスクを削除する関数
  const deleteTask=(index:number)=>{
  const newTodoText: string[] = [...todoText];
  newTodoText.splice(index, 1);
  setTodoText(newTodoText);
  }

  return (
    <div className="todo">
      <input value={todo} onChange={handleChange} placeholder="タスク" />
      <button onClick={addTask}>追加</button>

      <ul>
        {todoText.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTask(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
