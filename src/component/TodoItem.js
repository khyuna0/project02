import "./TodoItem.css";

function TodoItem () {
    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox"/>
            </div>
            <div className="title_col">할 일</div>
            <div className="date_dol">{new Date().toDateString()}</div>
            <div className="btn_col"><button>삭제</button></div>
        </div>
    );
}

export default TodoItem;