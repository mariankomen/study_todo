import React from 'react';
import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";
import SerchPanel from "./components/serch-panel";


const App = () => {
    return (
        <div>
            <AppHeader/>
            <TodoList/>
            <SerchPanel/>
        </div>
    );
}
export default App;
