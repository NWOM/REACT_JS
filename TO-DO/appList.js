import React from 'react';

export class ToDoAppList extends React.Component {
    constructor() {
        super();
        this.remove = this.remove.bind(this);
    }

    remove(event) {
        var value = event.target.parentNode.querySelector('span').innerText;
        this.props.remove(value);
    }

    render() {
        var items = this.props.task.map((elem, i) => (
            <li key={i}>
                <span>{elem}</span>
                <button onClick={this.remove}>X</button>
            </li>
        ));

        return (
            <ul>
                {items}
            </ul>
        );
    }
}
