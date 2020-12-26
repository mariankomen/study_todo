import React from 'react';
import TodoListItem from "./todo-list-item";

const TodoList = ({TodoData}) => {
    const ListItem = TodoData.map((items)=>{
        const {id, ...itemObj} = items;
        return (
            <li key={id}>
                <TodoListItem {...itemObj}/>
            </li>
        );
    });

    return (
        <div>
            {ListItem}
        </div>
    );
}

export default TodoList;