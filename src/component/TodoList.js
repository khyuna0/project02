import "./TodoList.css";
import TodoItem from './TodoItem';
import { useState } from "react";

function TodoList ({todo}) {

    const [search, setSearch] = useState("");

    function onChangeSearch (e) {
        setSearch(e.target.value);
    }

    function getSearchResult () { // 검색어 필터링 함수
        if (search  === "") {
            return todo;
        } else {
            return todo.filter(
                (item) => item.content.toLowerCase().includes(search.toLowerCase())
                // 특정 단어가 있는 content 만 걸러내어 배열로 반환
            );
        }
    }

    return (
        <div className="TodoList">
            <h4>Todo List</h4>
            <input className="searchbar" value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">

                {/* map 메서드는 배열 todo의 모든 요소를 순차적으로 순회하며 HTML로 변환 
                이 식의 결괏값은 배열 todo에 저장된 모든 할 일을 <div> 태그로 감싼 것과 동일 */}
                {/* for문과 비슷, 배열 요소 하나당 key 값 필수임 (없으면 에러) */}
                {/* id, isDone, content, createDate로 쪼갠 후 props로 넣어줌 */}

                {getSearchResult().map((item) => (
                    <TodoItem key={item.id} {...item}/>
                ))}
                
            </div>
        </div>
    );
}

export default TodoList