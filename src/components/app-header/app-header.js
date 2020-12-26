import React from 'react';
import './app-header.css'
import ItemStatusFilter from "../item-status-filter/item-status-filter";

const AppHeader = ({toDo, done}) => {
    return (
        <div className='app-header d-flex'>
            <h1>ToDo List</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
}

export default AppHeader;