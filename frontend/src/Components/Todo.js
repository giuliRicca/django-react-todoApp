function Todo({data, onEdit, onDelete}) {
    return (
        <li className="list-group-item
            d-flex
         justify-content-between align-items-center">
            <span className={data.completed ? "text-decoration-line-through" : ""}>
                {data.title}
            </span>
            <span>
                <button className="btn btn-primary mx-1"
                        onClick={() => {onEdit(data)}}>
                    Edit
                </button>
                <button className="btn btn-danger"
                        onClick={() => {onDelete(data)}}>
                    Delete
                </button>
            </span>

        </li>
    )
}

export default Todo
