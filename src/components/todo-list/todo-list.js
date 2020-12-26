import React from 'react';
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'



const TodoList = ({TodoData, OnDeleted}) => {
    const ListItem = TodoData.map((items)=>{
        const {id, ...itemObj} = items;
        return (
            <li key={id} className='list-group-item'>
                <TodoListItem
                    {...itemObj}
                    OnDeleted = {() => OnDeleted(id)}
                />
            </li>
        );
    });

    return (
        <ul className='list-group todo-list'>
            {ListItem}
        </ul>
    );
}

export default TodoList;