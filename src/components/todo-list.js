import React from 'react';
import TodoListItem from "./todo-list-item";

const TodoList = ({TodoData}) => {

    const ListItem = TodoData.map((items)=> <TodoListItem {...items}/>)

    return (
        <div>
            {ListItem}
        </div>
    );
}

export default TodoList;