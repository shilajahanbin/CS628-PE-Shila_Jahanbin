function TodoItem({ todo, index, deleteTask }) {
  return (
    <div className="todo-item">
      <span>{todo}</span>

      <button className="delete-button" onClick={() => deleteTask(index)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;