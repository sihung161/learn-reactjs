import TodoList from './components/TodoList';

function TodoFeature() {

    const todoList = [
        {
            id: 1,
            title: 'Lam bai tap',
            status: 'new'
        },
        {
            id: 2,
            title: 'An com',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Nghi ngoi',
            status: 'new'
        }
    ]

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoFeature;