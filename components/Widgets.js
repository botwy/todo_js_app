import React, {Component} from "react";

export const TodoForm = ({addTodo}) => {
    // Input tracker
    let input;

    return (
        <div>
        <input ref={node => {
        input = node;
}} />
    <button onClick={() => {
        addTodo(input.value);
        input.value = '';
    }}>
    +
    </button>
    </div>
);
};

export const Title = () => {
    return (
        <div>
            <div>
                <h1>to-do</h1>
            </div>
        </div>
    );
}

export const Todo = ({todo, remove}) => {
    // Each Todo
    return (<li onClick={()=>remove(todo.id)}>{todo.text}</li>);
}

export const TodoList = ({todos, remove}) => {
    // Map through the todos
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove}/>)
    });
    return (<ul>{todoNode}</ul>);
}