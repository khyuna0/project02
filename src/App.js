import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useState, useRef } from 'react';

function App() {
  const mockTodo = [
    {
      id : 0,
      isDone : false,
      content : "리액트 공부하기",
      createDate : new Date().getTime(),
    },
    {
      id : 1,
      isDone : false,
      content : "빨래 널기",
      createDate : new Date().getTime(),
    },
    {
      id : 2,
      isDone : false,
      content : "노래 연습하기",
      createDate : new Date().getTime(),
    }
  ];

  const [todo , setTodo] = useState(mockTodo);

  const idRef = useRef(3); // 초깃값이 3인 ref 객체 생성하여 idRef 에 저장 

  function onCreate (content) { // 추가 버튼이 클릭되면 실행될 이벤트 핸들러
    const newItem = {
      id : idRef.current, // idRef에 현재 저장된 값을 불러옴
      content,
      isDone : false,
      createDate : new Date().getTime()
    };
    // newItem으로 할일 객체를 생성 후 idRef 값을 1증가
    idRef.current += 1;
    setTodo([newItem, ...todo]); 
  }

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo}/>
    </div>
  );
}

export default App;
