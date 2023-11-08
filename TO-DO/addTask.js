import React from 'react';

export class AddNewTask extends React.Component {
    constructor() {
        super();
        this.justSubmitted = this.justSubmitted.bind(this);
    }

    justSubmitted(event) {
        event.preventDefault();
        var text = event.target.querySelector('input');
        var value = text.value; // Fix the variable name here
        text.value = ' ';
        this.props.updateList(value);
    }

    render() {
        return (
            <form onSubmit={this.justSubmitted}>
                <input type="text" />
            </form>
        );
    }
}
