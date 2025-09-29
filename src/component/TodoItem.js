import "./TodoItem.css"

function TodoItem({id, content, isDone, createDate, onUpdate, onDelete}) {

    function onChangeCheckbox() {
        onUpdate(id);
        console.log(isDone)
    }

    function onClickDelete() {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" onChange={onChangeCheckbox} checked={isDone} />
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">{new Date(createDate).toDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
}

export default TodoItem;