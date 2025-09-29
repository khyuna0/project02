import "./TodoItem.css";

function TodoItem ({id, content, isDone, createDate}) {
    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox"/>
            </div>
            <div className="title_col">{content}</div>
            <div className="date_dol">{new Date(createDate).toDateString()}</div>
            <div className="btn_col"><button>삭제</button></div>
        </div>
    );
}

export default TodoItem;