import React, {Component} from 'react';
import AppHeader from "./components/app-header/app-header";
import TodoList from "./components/todo-list/todo-list";
import SerchPanel from "./components/serch-panel/serch-panel";
import "./index.css"
import ItemStatusFilter from "./components/item-status-filter/item-status-filter";

export default class App extends Component{
    state = {
        TodoData: [
            {label: "Hello my name is Petya", important: true, id: 1},
            {label: "Hello my name is Ivan", important: false, id: 2},
            {label: "Hello my name is Misha", important: false, id: 3},
            {label: "Hello my name is Stepan", important: false, id: 4},
            {label: "Hello my name is Sasha", important: false, id: 5},
        ]
    }
    deleteItem  = (id) => {
        this.setState(({TodoData}) => {
            const idx = TodoData.findIndex((el) => el.id === id);

            const newArr =  [
                ...TodoData.slice(0, idx),
                ...TodoData.slice(idx+1)
            ]
            console.log('Delte id: ', id)
            return{
                TodoData: newArr
            };
        });
    };

    render() {
        return (
            <div className='todo-app'>
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SerchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList TodoData={this.state.TodoData}
                          OnDeleted={this.deleteItem}/>
            </div>
        );
    }
}

