import React from 'react';
import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";
import SerchPanel from "./components/serch-panel";


const App = () => {


    const TodoData = [
        {label: "Hello my name is Petya", important: true, id: 1},
        {label: "Hello my name is Petya", important: false, id: 2},
        {label: "Hello my name is Petya", important: false, id: 3},
        {label: "Hello my name is Petya", important: true, id: 4},
    ]
    return (
        <div>
            <AppHeader/>
            <TodoList TodoData = {TodoData}/>
            <SerchPanel/>
        </div>
    );
}
export default App;
