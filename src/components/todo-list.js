import React from 'react';
import TodoListItem from "./todo-list-item";

const TodoList = () => {
    return (
        <div>
            <ul>
                <li>Drink coffe</li>
                <li>Make React app</li>
                <li><TodoListItem label="hello bitches"
                                  important/></li>
                <li><TodoListItem label="hello mums"/></li>
                <li><TodoListItem label="hello mums"
                                  important/></li>

            </ul>
        </div>
    );
}

export default TodoList;