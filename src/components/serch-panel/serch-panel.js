import React, {Component}  from 'react';



export default class SerchPanel extends Component{

    state={
        term: ''
    }
    OnSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.OnSearchChange(term)
    };
    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search"
                   value={this.state.term}
                   onChange={this.OnSearchChange}

            />
        );
    }
}
