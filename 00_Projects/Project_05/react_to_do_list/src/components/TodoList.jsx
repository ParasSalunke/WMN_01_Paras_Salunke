import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;