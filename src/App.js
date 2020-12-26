import React from 'react';
import AppHeader from "./components/app-header/app-header";
import TodoList from "./components/todo-list/todo-list";
import SerchPanel from "./components/serch-panel/serch-panel";
import "./index.css"
import ItemStatusFilter from "./components/item-status-filter/item-status-filter";

const App = () => {


    const TodoData = [
        {label: "Hello my name is Petya", important: true, id: 1},
        {label: "Hello my name is Petya", important: false, id: 2},
        {label: "Hello my name is Petya", important: false, id: 3},
        {label: "Hello my name is Petya", important: true, id: 4},
    ]
    return (
        <div className='todo-app'>
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SerchPanel/>
                <ItemStatusFilter />
            </div>

            <TodoList TodoData = {TodoData}/>
        </div>
    );
}
export default App;
