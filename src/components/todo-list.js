import React from 'react';
import TodoListItem from "./todo-list-item";

const TodoList = ({TodoData}) => {

    const {id, ...itemObj} = TodoData;

    const ListItem = TodoData.map((items)=> <li key={items.id}><TodoListItem {...itemObj}/></li>)

    return (
        <div>
            {ListItem}
        </div>
    );
}

export default TodoList;