import React, {Component} from 'react';
import AppHeader from "./components/app-header/app-header";
import TodoList from "./components/todo-list/todo-list";
import SerchPanel from "./components/serch-panel/serch-panel";
import "./index.css"
import ItemStatusFilter from "./components/item-status-filter/item-status-filter";
import ItemAddForm from "./components/item-add-form/item-add-form";

export default class App extends Component {
    newID = 100;
    state = {
        TodoData: [
            this.CreateToDoItem("hello"),
            this.CreateToDoItem("Drink coffe"),
            this.CreateToDoItem("learn react"),
            this.CreateToDoItem("jumaaa"),
        ], term: ''
    }


    AddItem = (text) => {
        const NewItem = this.CreateToDoItem(text);
        this.setState(({TodoData}) => {
            const NewAddedArray = [...TodoData, NewItem]
            return {
                TodoData: NewAddedArray
            }
        })

    }

    toggleProperty(arr, id, propname) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propname]: !oldItem[propname]
        };
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    CreateToDoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.newID++
        }
    }

    deleteItem = (id) => {
        this.setState(({TodoData}) => {
            const idx = TodoData.findIndex((el) => el.id === id);
            const newArr = [
                ...TodoData.slice(0, idx),
                ...TodoData.slice(idx + 1)
            ]
            return {
                TodoData: newArr
            };
        });
    };


    onToggleImportant = (id) => {
        this.setState(({TodoData}) => {
            return {
                TodoData: this.toggleProperty(TodoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({TodoData}) => {
            return {
                TodoData: this.toggleProperty(TodoData, id, 'done')
            }
        })
    }

    search(ITEMS, term) {
        if(term === 0){
            return ITEMS;
        }
        return ITEMS.filter((item)=>{
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }
    OnSearchChange = (term) => {
        this.setState({term});
    };


    render() {
        // const TODODATA = this.state.TodoData;
        const {TodoData, term} = this.state;
        const DoneItems = TodoData.filter((el) => el.done).length;
        const TodoCount = TodoData.filter((el) => !el.done).length;
        const VisibleItems = this.search(TodoData, term)
        return (
            <div className='todo-app'>
                <AppHeader toDo={TodoCount} done={DoneItems}/>
                <div className="top-panel d-flex">
                    <SerchPanel OnSearchChange={this.OnSearchChange}/>
                    <ItemStatusFilter/>
                </div>

                <TodoList TodoData={VisibleItems}
                          OnDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />

                <ItemAddForm AddItem={this.AddItem}/>
            </div>
        );
    }
}

