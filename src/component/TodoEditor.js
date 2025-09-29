import { useRef, useState } from "react";
import "./TodoEditor.css";


function TodoEditor ({onCreate}) {

    const [content, setContent] = useState("");
    const inputRef = useRef();

    function onChangeContent (e) { //이벤트 핸들러
        setContent(e.target.value); // 유저가 입력한 할일 텍스트
    }

    function onSubmit () {  // 버튼 눌렀을 때 실행
        if (!content) { // 참이면 빈칸으로 들어옴
            alert("내용 입력은 필수입니다.")
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent(""); // 할일 입력창 초기화
    }

    function onKeyDown(e) {
        if(e.keyCode === 13) {// 엔터 키 코드 - 13
            onSubmit();
        };
    }

    return (
        <div className="TodoEditor">
            <h4>새로운 TODO 작성하기 ✍️</h4>
            <div className="editor_wrapper">
                <input ref={inputRef} value={content} onKeyDown={onkeydown} onChange={onChangeContent} placeholder="새로운 TODO..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default TodoEditor;