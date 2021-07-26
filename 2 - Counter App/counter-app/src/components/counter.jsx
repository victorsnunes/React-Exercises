import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: this.props.value
    }

    handleIncrement = (product) => {
        console.log(product)
        this.setState({ value: this.state.value + 1 });
    }

    render() {
        return (
            <div>
                <h4>Counter #{this.props.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement("product")} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "btn m-2 btn-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;