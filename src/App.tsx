import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

const[task,setTasks]=useState<string[]>([]);


const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  console.log(e.target.value);
}

//追加ボタンを押した時の処理
const handleClick=()=>{
  const input=document.querySelector('input');
  if(input){
    setTasks([...task,input.value]);
    input.value='';
  }
}

  return (
    <div className="App">
      <h2>Todo リスト</h2>
     <input type='text' placeholder='タスク' onChange={handleChange}></input>
     <button onClick={handleClick}>追加</button>
    </div>
  );
}

export default App;
