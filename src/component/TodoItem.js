import "./TodoItem.css";

function TodoItem ({id, content, isDone, createDate, onUpdate}) {

    function onChangeCheckBox () {
        onUpdate(id);
        console.log(isDone);
        
    }

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" onChange={onChangeCheckBox} checked={isDone}/>
            </div>
            <div className="title_col">{content}</div>
            <div className="date_dol">{new Date(createDate).toDateString()}</div>
            <div className="btn_col"><button>삭제</button></div>
        </div>
    );
}

export default TodoItem;