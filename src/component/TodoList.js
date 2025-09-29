import "./TodoList.css";
import TodoItem from './TodoItem';

function TodoList ({todo}) {
    return (
        <div className="TodoList">
            <h4>Todo List</h4>
            <input className="searchbar" placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
                {/* map 메서드는 배열 todo의 모든 요소를 순차적으로 순회하며 HTML로 변환 
                이 식의 결괏값은 배열 todo에 저장된 모든 할 일을 <div> 태그로 감싼 것과 동일 */}
                {todo.map((item) => (
                    <TodoItem key={item.id} {...item}/>
                    // id, isDone, content, createDate로 쪼갠 후 props로 넣어줌
                ))}
            </div>
        </div>
    );
}

export default TodoList