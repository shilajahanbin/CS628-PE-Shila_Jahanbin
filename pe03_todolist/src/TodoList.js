import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTask }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TodoList;