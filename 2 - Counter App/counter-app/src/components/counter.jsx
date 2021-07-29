import React, { Component } from 'react';

class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log('PrevProps: ', prevProps);
        console.log('PrevState', prevState);

        if (prevProps.counter.value !== this.props.counter.value) {
            //Ajax call, for example
        }
    }

    render() {
        console.log('Counter - Rendered');
        return (
            <div className="row">
                <h4>Counter #{this.props.counter.id}</h4>
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button
                        onClick={() => this.props.onIncrement(this.props.counter)}
                        className="btn btn-secondary btn-sm">
                        +
                    </button>
                    <button
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        className="btn btn-secondary btn-sm m-2"
                        disabled={(this.props.counter.value <= 0) ? "disabled" : ""}>
                        -
                    </button>
                    <button
                        onClick={() => this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger btn-sm">
                        X
                    </button>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        console.log('Counter - Unmounted');
    }

    getBadgeClasses() {
        let classes = "btn m-2 btn-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;