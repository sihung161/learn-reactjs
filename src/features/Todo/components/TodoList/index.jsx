import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';
import TodoForm from '../TodoForm';

TodoList.propTypes = {
    todoList: PropTypes.array
};

TodoList.defaultProps = {
    todoList: []
}

const handleTodoFormSubmit = (values) => {
    console.log('Form values: ', values);
    // const newTodo = {
    //     id: 5,
    //     title: values.title,
    //     status: 'new'
    // }
}

function TodoList({ todoList }) {
    return (
        <>
            <h3>Todo Form</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />

            <ul className='todo-list'>
                {todoList.map(todo => (
                    <li
                        key={todo.id}
                        className={classnames({
                            'todo-item': true, // do có dấu - nên class phải đẻ trong dấu nháy ''
                            completed: todo.status === 'completed' //tên class đơn nên không cần để trong dấu nháy ''
                        })}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </>

    );
}

export default TodoList;