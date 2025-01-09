import { useState,useEffect } from "react";

function Todo() {
  //inputに入力された値を保持するためのstate
  const [todo, setTodo] = useState<string>("");

  //todoリストを保持するためのstate
  const [todoText, setTodoText] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  setTodo(event.target.value);
  }

  // ページ読み込み時に`localStorage`からデータを取得
useEffect(() => {
	const storedTodoText = localStorage.getItem("todoText");
	if (storedTodoText) {
	//JSON.parse() 静的メソッドは、文字列を JSON として解析し、文字列によって記述されているJavaScript の値やオブジェクトを構築します。
	  setTodoText(JSON.parse(storedTodoText));
	}
        }, []);

// `todoText`が変更されたら`localStorage`にデータを保存
//JSON.stringify() メソッドは、ある JavaScript のオブジェクトや値を JSON 文字列に変換します。
useEffect(() => {
	localStorage.setItem("todoText", JSON.stringify(todoText));
        }, [todoText]); 

  //todoリストにタスクを追加する関数
  const addTask = () => {
	if (todo !== "") {
	  setTodoText([...todoText, todo]); 
	  setTodo(""); 
	  console.log(todoText);
	}
        };

  //todoリストからタスクを削除する関数
  const deleteTask = (index: number) => {
    const newTodoText: string[] = [...todoText];
    newTodoText.splice(index, 1);
    setTodoText(newTodoText);
  };

  return (
    <div className="todo">
      <input value={todo} onChange={handleChange} placeholder="タスク" />
      <button className="addButton" onClick={addTask}>
        追加
      </button>

      <ul>
        {todoText.map((todo, index:number) => {
          return (
		<li key={index} className="todo-item">
		<input type="checkbox" />
		<span className="todo-text">{todo}</span>
		<button
		  className="deleteButton"
		  onClick={() => deleteTask(index)}
		>
		  削除
		</button>
	        </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
