import React from 'react';
import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";
import SerchPanel from "./components/serch-panel";


const App = () => {


    const TodoData = [
        {label: "Hello my name is Petya", important: true},
        {label: "Hello my name is Petya", important: false},
        {label: "Hello my name is Petya", important: false},
        {label: "Hello my name is Petya", important: true},
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
